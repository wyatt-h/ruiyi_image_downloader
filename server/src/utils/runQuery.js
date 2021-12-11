import {
  createTables,
  insertIntoTables,
  testConnection,
} from "./queryFunctions";

(async () => {
  await testConnection();
  await createTables();
  await insertIntoTables();
})();

function print() {
  console.log("haha");
}
print();
