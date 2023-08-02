import db from "./config/database.js";

const add = async () => {
  await db.visitor.add("pseud", 2)
  console.log("Success");
}

const get = async () => {
  console.log(await db.visitor.all());
  console.log("Success");
}

const drop = async () => {
  (await db.visitor.all()).map(async(m) => await db.visitor.delete(m.id))
  console.log("Success");
}

const reset = async () => {
  (await db.visitor.all()).map(async(m) => await db.visitor.set(m.id, 0))
  console.log("Success");
}


// get();