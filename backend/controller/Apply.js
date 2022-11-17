import express, { Router } from "express";
import companyModel from "../Model/Company.model.js";
import userModel from "../Model/User.model.js";
const applyRouter = express.Router();
applyRouter.post("/company/:compId/:userId", async (req, res) => {
  const { compId, userId } = req.params;
  try {
    const user = await userModel.findById(userId);
    const company = await companyModel.findById(compId);
    user.CompanyId = [...user.CompanyId, compId];
    user.save();
    res.send({
      message: "Applied company successfully",
    });
  } catch (error) {
    console.log(error);
  }
});
export default applyRouter;
