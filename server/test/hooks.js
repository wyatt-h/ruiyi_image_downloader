import {
  dropTables,
  createTables,
  insertIntoTables,
} from "../src/utils/queryFunctions";

before(() => {
  await createTables();
  await insertIntoTabels();
});

after(async () => {
  await dropTables();
});
