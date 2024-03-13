import mongoose from "mongoose";

let connect = null;

const connectDB = async () => {
  const userName = process.env.USERNAME_DB;
  const password = process.env.PASSWORD_DB;
  const cluster = process.env.CLUSTER_DB;
  const connectionURI = `mongodb+srv://${userName}:${password}${cluster}`;
  
  console.log("connectionURI:", connectionURI);
  try {
    if (!connect) {
      connect = await mongoose.connect(connectionURI);
      console.log("Connected to the database");
    }
    return connectionURI;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDB;
