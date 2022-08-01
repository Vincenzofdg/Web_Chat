const { 
  MYSQL_PASSWORD,
  MYSQL_USER,
  DB_NAME,
  HOST_NAME,
  BACK_PORT,
} = process.env;

// const setupConfig = {
//   username: MYSQL_USER || 'root',
//   password: MYSQL_PASSWORD || 'password',
//   database: DB_NAME || 'web_chat',
//   host: HOST_NAME || 'localhost',
//   port: Number(BACK_PORT || 3001),
//   dialect: 'mysql',
// }

const setupConfig = {
  username: 'root',
  password: 'password',
  database: 'Database',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
}

module.exports = {
  development: setupConfig,
  test: setupConfig,
  production: setupConfig,
};