const Database = require("./database");
let createStatementFile = "./createStatements.json";
let adminPass = "";
const printMessage = (message) => console.log(message);
const printStatement = (statement) => printMessage(`${statement}`);
const printError = (message) =>
  printError(`${"#".repeat(20)} Error ${"#".repeat(20)}`);
if (process.argv.length > 2) {
  adminPass = process.argv[2];
  if (process.argv.length > 3) {
    createStatementFile = `./${process.argv[3]}`;
  }
}

try {
  console.log(require(createStatementFile), adminPass);
} catch (error) {
  console.log(error.message);
}

async function createdb(createStatements, adminPass) {
  const options = {
    host: createStatements.host,
    port: createStatements.port,
    user: createStatements.user,
    password: createStatements.password,
  };
  const DEBUG = createStatements.debug;
  const db = new Database(options);
  const user = `"${createStatements.user}"@"${createStatements.host}"`;
  const dropDatabaseSql = `drop database if exists ${createStatements.database}`;
  const createDatabaseSql = `create database ${createStatements.database}`;
  const dropUserSql = `drop user if exists ${user}`;
  const createUserSql =
    `create user if not exists ${user}` +
    `identified by "${createStatements.userpassword}"`;
  try {
    await db.doQuery(dropDatabaseSql);
    if (DEBUG) printStatement(dropDatabaseSql);
    await db.doQuery(createDatabaseSql);
    if (DEBUG) printStatement(createDatabaseSql);
    if (createStatements.dropUser) {
      await db.doQuery(dropUserSql);
      if (DEBUG) printStatement(dropUserSql);
    }
    await db.doQuery(createUserSql);
    if (DEBUG) printStatement(createUserSql);
  } catch (error) {}
}
