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
}
