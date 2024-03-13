import server from "./index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "/Users/yosimiller/Desktop/bar-website/server/config/connectDB.js"

dotenv.config();

connectDB()

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});