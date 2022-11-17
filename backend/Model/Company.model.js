import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    CompanyName: String,
    Position: String,
    Contract: String,
    Location: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const companyModel = mongoose.model("company", companySchema, "company");
export default companyModel;
