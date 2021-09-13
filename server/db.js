const Pool = require("pg").Pool;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "ruiyi_img",
  password: "HeadJP5849",
  port: 5432,
});

module.exports = pool;
