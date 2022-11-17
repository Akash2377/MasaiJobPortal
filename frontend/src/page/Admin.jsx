import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componenet/Navbar";
const Admin = () => {
  const [companyData, setCompanyData] = React.useState({
    CompanyName: "",
    Position: "",
    Contract: "",
    Location: "",
  });
  const { CompanyName, Position, Contract, Location } = companyData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const StoreData = (e) => {
    e.preventDefault();
    fetch(`https://mongodbserverak.herokuapp.com/company/add`, {
      method: "POST",
      body: JSON.stringify(companyData),
      headers: { "content-type": "application/json" },
    });
    alert("New Job Added Successfully");
  };
  return (
    <>
      <Navbar />
      <form>
        <h1 style={{ textAlign: "center" }}>Enter New Job Details</h1>
        <table>
          <tbody>
            <tr>
              <td>Company name</td>
              <td>
                <input
                  type="text"
                  name="CompanyName"
                  value={CompanyName}
                  onChange={handleChange}
                  placeholder="Enter Company name"
                  style={inputField}
                />
              </td>
            </tr>
            <tr>
              <td>Position</td>
              <td>
                <input
                  type="text"
                  name="Position"
                  value={Position}
                  onChange={handleChange}
                  placeholder="Enter Position"
                  style={inputField}
                />
              </td>
            </tr>
            <tr>
              <td>Contract</td>
              <td>
                <input
                  type="text"
                  name="Contract"
                  value={Contract}
                  onChange={handleChange}
                  placeholder="Enter Contract"
                  style={inputField}
                />
              </td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                <input
                  type="text"
                  name="Location"
                  value={Location}
                  onChange={handleChange}
                  placeholder="Enter Location"
                  style={inputField}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input
          type="submit"
          onClick={StoreData}
          style={submitBTN}
          value="CREATE"
        />
      </form>
    </>
  );
};

export default Admin;
const submitBTN = {
  backgroundColor: "crimson",
  padding: "10px 30px",
  fontSize: "20px",
  borderRadius: "10px",
  border: "none",
  color: "white",
  marginLeft: "600px",
  marginTop: "50px",
  cursor: "pointer",
};
const linkCSS = {
  textDecoration: "none",
  color: "black",
  fontSize: "20px",
  fontWeight: "500",
  fontFamily: "Arial",
};
const inputField = {
  width: "90%",
  padding: "5px",
  border: "none",
  outline: "none",
};
const selectField = {
  width: "90%",
  outline: "none",
  border: "none",
};
