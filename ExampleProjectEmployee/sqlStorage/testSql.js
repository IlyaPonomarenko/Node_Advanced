const sql = require("./sqlStatements.json");

const getAllSql = sql.getAll.join(" ");
console.log(getAllSql)