import express, { Router } from "express";
import userModel from "../Model/User.model.js";
const isSignInRouter = express.Router();
isSignInRouter.post("/user", async (req, res) => {
  const { Email, Password } = req.body;
  const present = await userModel.findOne({ Email, Password });
  if (present) {
    if (Email.search(/@masaischool.com/) !== -1) {
      res.send({
        message: "Admin",
        token: present._id,
      });
    } else {
      res.send({
        message: "Student",
        token: present._id,
      });
    }
  } else {
    res.send({
      message: "Not found",
    });
  }
});

export default isSignInRouter;
