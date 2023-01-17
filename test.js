"use strict"

const mariadb = require("mariadb");

testA();

async function testA(){
    const options={
        host:'localhost',
        port:3306,
        user:"ILYA",
        password:"secret",
        database:"employeeDB"
    }
    //opens the connection
    const connection = await mariadb.createConnection(options)
    
    let result = await connection.query("select * from employee")
    console.log(result)

    //close connection
    connection.end()

}