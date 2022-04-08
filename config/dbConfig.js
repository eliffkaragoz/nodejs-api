// module.exports = {
//   HOST:'localhost',
//   USER:'root',
//   PASSWORD:  'password',
//   DB:  'omulingo',
//   dialect: "mysql",

// };


module.exports = {
  HOST: process.env.MYSQL_HOST,
  USER:process.env.MYSQL_USER,
  PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
  DB: process.env.MYSQL_DATABASE,
  dialect: "mysql",

};

  