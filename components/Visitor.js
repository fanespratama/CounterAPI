import db from "../config/database.js"

export const VisitorAdd = async (req, res) => {
  try {
    const table = req.params.id;
    await db.visitor.add(table, 1);
    res.json({ data: await db.visitor.get(table), status: true })
  } catch (err) {
    console.log(err);
    res.json({ status: false })
  }
};

export const VisitorGet = async (req, res) => {
  try {
    const data = await db.visitor.all();
    res.json({ data: data, status: true })
  } catch (err) {
    console.log(err);
    res.json({ status: false })
  }
};


export const VisitorGetByID = async (req, res) => {
  try {
    const data = await db.visitor.get(req.params.id);
    res.json({ data: data, status: true })
  } catch (err) {
    console.log(err);
    res.json({ status: false })
  }
};

export const VisitorReset = async (req, res) => {
  try {
    (await db.visitor.all()).map(async (m) => await db.visitor.set(m.id, 0));
    res.json({ status: true })
  } catch (err) {
    console.log(err);
    res.json({ status: false })
  }
};

export const VisitorDrop = async (req, res) => {
  try {
    (await db.visitor.all()).map(async(m) => await db.visitor.delete(m.id));
    res.json({ status: true })
  } catch (err) {
    console.log(err);
    res.json({ status: false })
  }
};
