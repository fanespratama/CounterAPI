import express from "express";
import cors from "cors";
import VisitorRoutes from "./routes/VisitorRoutes.js";
// import http from "http";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/visitor', VisitorRoutes);
app.listen(80, () => console.log('Server running at port 80'));

// http.createServer(function(req, res) {
//   res.write("Bot Alive!");
//   res.end();
// }).listen(8080)