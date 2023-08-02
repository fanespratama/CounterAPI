import express from "express";
import { VisitorAdd, VisitorDrop, VisitorGet, VisitorGetByID, VisitorReset } from "../components/Visitor.js";

 
const router = express.Router();

router.get('/', VisitorGet);
router.get('/reset', VisitorReset);
router.get('/drop', VisitorDrop);
router.get('/:id', VisitorGetByID);
router.get('/add/:id', VisitorAdd);

export default router;