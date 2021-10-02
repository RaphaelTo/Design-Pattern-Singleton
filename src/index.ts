import 'reflect-metadata';
import { Connection } from 'typeorm';
import Database from './Database';

(async () => {
  try {
    const database: Connection = await Database.getInstance();
    console.log(database);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
})();
