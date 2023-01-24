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
  await add({
    id:200,
    firstname:"Mike",
    lastname:"jones",
    department:"maints",
    salary:4000
  })
  await getAll();
  await remove(200)
  await getAll();
}
async function remove(id){
 try {
  const status = await db.doQuery("delete from employee where id=?", [id])
  console.log(status)
 } catch (error) {
  
 }
}
async function add(employee){
  try{
    const parameters = [
      employee.id,
      employee.firstname,
      employee.lastname,
      employee.department,
      employee.salary
    ]
    const sql = "insert into employee values(?,?,?,?,?)"
    const status = await db.doQuery(sql, parameters)
    console.log(status)
  }
  catch(err){
    console.log(err)
  }
}