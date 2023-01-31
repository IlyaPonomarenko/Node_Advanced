const Database = require("./database")
let createStatementFile = "./createStatements.json"
let adminPass ="";

if (process.argv.length > 2){
    adminPass=process.argv[2];
    if(process.argv.length>3){
        createStatementFile=`./${process.argv[3]}`;
    }
}

console.log(createStatementFile, adminPass)