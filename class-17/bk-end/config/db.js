import mongoose from "mongoose";
import "dotenv/config.js";

export const database_Connect = async () => {
  const db_connect = await mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "mern-todo",
    })
    .then((data) => {
      console.log(`data base connected at port => ${data.connection.port}`);
    })
    .catch((err) => {
      console.log(err);
      process.exit(0);
    });
};
