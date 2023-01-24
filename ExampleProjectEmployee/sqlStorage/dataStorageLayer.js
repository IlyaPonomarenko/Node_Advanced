"use strict";

const Database = require("./database");
const options = require("./databaseOptions.json");

const { CODES, MESSAGES } = require("./statusCodes");

const sql = require("./sqlStatements.json");

const getAllSql = sql.getAll.join(" ");
const getOneSql = sql.getOne.join(" ");
const insertSql = sql.insertOne.join(" ");

//Datastorage class

module.exports = class Datastorage {
  constructor() {
    this.db = new Database(options);
  }
  get CODES() {
    return CODES;
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.doQuery(getAllSql);
        resolve(result.queryResult);
      } catch (error) {}
    });
  } //end getAll

  getOne(id) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject(MESSAGES.NOT_FOUND("---empty---"));
      } else {
        const result = await this.db.doQuery(getOneSql, [id]);
        if (result.queryResult.length > 0) {
          resolve(result.queryResult[0]);
        } else {
          reject(MESSAGES.NOT_FOUND(id));
        }
      }
    });
  } //end of getOne

  insert(employee) {
    return new Promise(async (resolve, reject) => {
      try {
        if (employee) {
          if (!employee.id) {
            reject(MESSAGES.NOT_INSERTED());
          } else if (await getFromStorage(employee.id)) {
            reject(MESSAGES.ALREADY_IN_USE(employee.id));
          } else if (await addToStorage(employee)) {
            resolve(MESSAGES.INSERT_OK(employee.id));
          } else {
            reject(MESSAGES.NOT_INSERTED());
          }
        } else {
          reject(MESSAGES.NOT_INSERTED());
        }
      } catch (error) {
        console.log(ers);
      }
    });
  } //end of insert

  update(employee) {
    return new Promise(async (resolve, reject) => {
      try {
        if (employee) {
          const status = await this.db.doQuery(updateSql, updateParameters);
          if (await updateStorage(employee)) {
            resolve(MESSAGES.UPDATE_OK(employee.id));
          } else {
            reject(MESSAGES.NOT_UPDATED());
          }
        } else {
          reject(MESSAGES.NOT_UPDATED());
        }
      } catch (error) {}
    });
  } //end update

  remove(id) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject(MESSAGES.NOT_FOUND("---empty---"));
      } else if (await removeFromStorage(id)) {
        resolve(MESSAGES.REMOVE_OK(id));
      } else {
        reject(MESSAGES.NOT_REMOVED(id));
      }
    });
  } //end of remove
};
