const Pool = require("pg").Pool;

const pool = new Pool({
  user: "wyatt",
  host: "localhost",
  database: "ruiyi_img",
  password: "ruiyi_img",
  port: 5432,
});

module.exports = pool;
