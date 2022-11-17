import express, { Router } from "express";
import companyModel from "../Model/Company.model.js";
const companyRouter = express.Router();
companyRouter.get("/search", async (req, res) => {
  const { searchCompany } = req.query;
  let queryC = {};
  if (searchCompany === undefined) {
    queryC = {};
  } else {
    queryC.CompanyName = {
      $regex: searchCompany,
      $options: "i",
    };
  }
  const allData = await companyModel.find(queryC);
  res.send(allData);
});
companyRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const company = await companyModel.findByIdAndDelete(id);
  return res.send({
    message: "Company deleted Successfully",
    companyDetails: company,
  });
});
companyRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const company = await companyModel.findByIdAndUpdate(id, data);
  return res.send({
    message: "Company data updated Successfully",
    companyDetails: company,
  });
});
companyRouter.post("/add", async (req, res) => {
  const { CompanyName, Position, Contract, Location } = req.body;
  await companyModel.create({
    CompanyName: CompanyName,
    Position: Position,
    Contract: Contract,
    Location: Location,
  });
  res.send({
    message: "Company added successfully",
  });
});
export default companyRouter;
