const chiki = module.exports = {};
const config = require('../config');
const bijection = require('./bijection');
const knex = require('knex');

const knexClient = knex(config.knexConfig);

chiki.fetch = (short) => {
  return new Promise((found, oops) => {
    knexClient.select()
    .from('chikis')
    .where('short', short)
    .limit(1)
    .then((chikis) => {
      if (chikis.length) {
        const chiki = chikis[0];
        found(chiki.url);
      } else {
        found(null);
      }
    })
    .catch(oops);
  });
}

chiki.create = (url) => {
  return new Promise((created, oops) => {
    knexClient.select()
    .from('chikis')
    .where('url', url)
    .limit(1)
    .then((chikis) => {
      if (chikis.length) {
        const chiki = chikis[0];
        created(chiki.short);
      } else {
        knexClient.insert({ url, short: null }, 'id')
        .into('chikis')
        .then((results) => {
          const id = results[0];
          const short = bijection.encode(id);
          created(short);
          knexClient('chikis').update({ short }).where('id', id)
          .then(Function.prototype)
          .catch(oops);
        })
        .catch(oops);
      }
    })
    .catch(oops);
  });
}
