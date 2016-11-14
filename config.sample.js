const config = module.exports = {};
config.port = 3000;
config.hostname = '127.0.0.1';
config.knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './chi.ki.sqlite'
  },
  useNullAsDefault: true
};
