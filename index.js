import express from "express";
import cors from "cors";
import VisitorRoutes from "./routes/VisitorRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/visitor', VisitorRoutes);
app.listen(5000, () => console.log('Server running at port 5000'));

