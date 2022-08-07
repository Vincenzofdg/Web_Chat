const { 
  MYSQL_PASSWORD,
  MYSQL_USER,
  DB_NAME,
  HOST_NAME,
  DB_PORT,
} = process.env;

const setupConfig = {
  username: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'password',
  database: DB_NAME || 'web_chat',
  host: HOST_NAME || 'db',
  port: Number(DB_PORT || 3306),
  dialect: 'mysql',
}

module.exports = {
  development: setupConfig,
  test: setupConfig,
  production: setupConfig,
};