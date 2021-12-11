import { pool } from "../models/pool";
import { insertImages, dropImageTable, createImageTable } from "./queries";

export const executeQueryArray = async (arr) =>
  new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (query, index) => {
      await pool.query(query).then((err, res) => {
        console.log(err, res);
      });
      if (index + 1 === stop) resolve();
    });
  });

export const testConnection = () => {
  console.log("It reaches here.");
  pool.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
  });
};

export const dropTables = () => executeQueryArray([dropImageTable]);
export const createTables = () => executeQueryArray([createImageTable]);
export const insertIntoTables = () => executeQueryArray([insertImages]);
