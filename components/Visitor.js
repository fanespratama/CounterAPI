import db from "../config/database.js"

export const VisitorAdd = async (req, res) => {
  try {
    await db.visitor.add(req.params.id, 1);
    res.json({ status: true })
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


