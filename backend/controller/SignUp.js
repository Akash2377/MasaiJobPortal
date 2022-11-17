import express, { Router } from "express";
import userModel from "../Model/User.model.js";
const isSignUpRouter = express.Router();
isSignUpRouter.post("/user", async (req, res) => {
  const { Name, Email, Password } = req.body;
  const present = await userModel.findOne({ Email });
  if (present) {
    res.send({
      message: "User Already Registered",
    });
  } else {
    if (Email.search(/@masaischool.com/) !== -1) {
      await userModel.create({
        Name: Name,
        Email: Email,
        Password: Password,
        Role: "Admin",
      });
      res.send({
        message: "Admin Registration Successfully",
      });
    } else {
      await userModel.create({
        Name: Name,
        Email: Email,
        Password: Password,
        Role: "Student",
        CompanyId: [],
      });
      res.send({
        message: "Student Registration Successfully",
      });
    }
  }
});

export default isSignUpRouter;
