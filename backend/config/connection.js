import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const connection = async () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        `mongodb+srv://${username}:${password}@cluster0.dn6nvsi.mongodb.net/?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("connected");
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};
export default connection;
