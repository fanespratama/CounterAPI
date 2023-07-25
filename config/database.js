import { QuickDB } from "quick.db";

class Database {
  constructor() {
    if (!Database.instance) {
      const db = new QuickDB();
      this.visitor = db.table("visitor");
      Database.instance = this;
    }

    return Database.instance;
  }
}

const dbInstance = new Database();
export default dbInstance;
