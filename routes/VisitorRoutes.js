import express from "express";
import { VisitorAdd, VisitorGet, VisitorGetByID } from "../components/Visitor.js";

 
const router = express.Router();

router.get('/', VisitorGet);
router.get('/:id', VisitorGetByID);
router.get('/add/:id', VisitorAdd);

export default router;