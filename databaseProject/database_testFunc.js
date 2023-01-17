"use strict";

const Database = require("./database");

const options = {
  host: "localhost",
  port: 3306,
  user: "ILYA",
  password: "secret",
  database: "employeeDB",
  allowPublicKeyRetrieval: true,
};

const db = new Database(options);
run();
//functions
async function getAll() {
  try {
    const result = await db.doQuery("select * from employee");
    if (result.resultSet) console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//main function
async function run() {
  await getAll();
}
