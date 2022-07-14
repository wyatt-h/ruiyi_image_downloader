import {
  createTables,
  insertIntoTables,
  testConnection,
} from "./queryFunctions";
import { pool } from "../models/pool";

(async () => {
  await testConnection();
  await createTables();
  await insertIntoTables();
  pool.end();
})();
