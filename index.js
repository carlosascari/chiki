const url = require('url');
const fs = require('fs');
const express = require('express');
const knex = require('knex');
const chiki = require('./lib/chiki');
const bijection = require('./lib/bijection');
const config = require('./config');

const { port, hostname } = config;
const HOST = port !== 80 ? `${hostname}:${port}` : hostname;
const README = fs.readFileSync('./README.md', 'utf8').replace(/\n/g, '\r\n').replace(/\n*```\n*/g, '');

const REG_WEB_PROTOCOL = /^http|https/i;
const REG_OTHER_PROTOCOL = /[a-z]+:\/\//i;
const REG_TLD = /\.[a-z]{2,}/i;
const REG_EXTRACT_URL = /\W*(.*)$/;
const hasProtocol = (url) => REG_WEB_PROTOCOL.test(url) || REG_OTHER_PROTOCOL.test(url);
const hasTld = (url) => REG_TLD.test(url);
const processRawUrl = (rawUrl) => {
  if (hasTld(rawUrl)) {
    if (!hasProtocol(rawUrl)) {
      const match = rawUrl.match(REG_EXTRACT_URL);
      rawUrl = `http://${ match && match[1] ? match[1] : rawUrl }`;
    }
    const rawUrlParsed = url.parse(rawUrl, false, hasProtocol(rawUrl));
    return rawUrlParsed ? url.format(rawUrlParsed) : null;
  } else {
    console.log('no tld')
    return null;
  }
};

const app = module.exports = express();

app.get('/', (req, res) => res.set('Content-Type', 'text/plain').send(README));

app.get('/:short', (req, res) => {
  chiki.fetch(req.params.short)
  .catch((error) => {
    res.set('Content-Type', 'text/plain').status(500).end('500 Internal Error');
    console.error(error);
  })
  .then((url) => {
    if (url) {
      res.redirect(url);
    } else {
      res.set('Content-Type', 'text/plain').status(404).end('404 Not found');
    }
  });
});

app.get('/add/*{4,32768}', (req, res) => {
  res.set('Content-Type', 'text/plain');
  const url = processRawUrl(req.originalUrl.slice(5));
  if (url) {
    chiki.create(url)
    .catch((error) => {
      res.set('Content-Type', 'text/plain').status(500).end('500 Internal Error');
      console.error(error);
    })
    .then((short) => res.end(`${HOST}/${short}`));
  } else {
    res.status(400).end('400 Invalid url');
  }
});

app.use((req, res) => res.set('Content-Type', 'text/plain').status(404).end('404 Not found'));

app.use((error, req, res) => {
  res.set('Content-Type', 'text/plain').status(500).end('500 Internal Error');
  console.error(error);
});

app.listen(port, () => process.stdout.write(`${hostname} listening on ${port}\n`));
