import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Name: String,
    Email: String,
    Password: String,
    Role: String,
    CompanyId: [mongoose.Types.ObjectId],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const userModel = mongoose.model("user", userSchema, "users");
export default userModel;
