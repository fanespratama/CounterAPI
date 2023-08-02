import express from "express";
import cors from "cors";
import VisitorRoutes from "./routes/VisitorRoutes.js";
// import http from "http";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/visitor', VisitorRoutes);
app.listen(443, () => console.log('Server running at port 443'));

// http.createServer(function(req, res) {
//   res.write("Bot Alive!");
//   res.end();
// }).listen(8080)