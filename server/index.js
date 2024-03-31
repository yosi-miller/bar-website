import express from "express";
import http from "http"; // why do we need this? 
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan"; // need define this
import contactRoutes from "./routes/contactRoutes.js";
import catalogRoutes from "./routes/catalogRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // need understand this
app.use(bodyParser.json()); // need understand this
app.use(cors()); // need define this

app.use(morgan("dev")); // need define this

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the backend!" });
});

app.use('/contacts', contactRoutes);
app.use('/catalog', catalogRoutes);
app.use('/orders', orderRoutes);

export default app;