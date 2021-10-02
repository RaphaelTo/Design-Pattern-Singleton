import { createConnection, Connection } from 'typeorm';

class Database {
  private static _instance: Connection;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static async getInstance(): Promise<Connection> {
    try {
      if (!Database._instance) {
        Database._instance = await createConnection();
      }
      return Database._instance;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export default Database;
