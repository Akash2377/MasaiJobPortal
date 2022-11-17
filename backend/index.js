import express from "express";
import connection from "./config/connection.js";
import cors from "cors";
import isSignUpRouter from "./controller/SignUp.js";
import isSignInRouter from "./controller/SignIn.js";
import companyRouter from "./controller/Company.js";
import applyRouter from "./controller/Apply.js";
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/apply", applyRouter);
app.use("/signup", isSignUpRouter);
app.use("/signin", isSignInRouter);
app.use("/company", companyRouter);
app.get("/", async (req, res) => {
  res.send("hi");
});
app.listen(port, async () => {
  try {
    await connection();
    console.log("start server");
  } catch (error) {
    console.log(error);
  }
});
