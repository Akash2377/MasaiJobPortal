import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoginSuccess } from "../Redux/action";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [SignUpData, SetSignUpData] = React.useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const { Name, Email, Password } = SignUpData;
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const verifyData = (e) => {
    e.preventDefault();
    if (Name === "" || Email === "" || Password === "") {
      alert("Please enter your email and password");
    } else {
      fetch(`https://mongodbserverak.herokuapp.com/signup/user`, {
        method: "POST",
        body: JSON.stringify(SignUpData),
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message) {
            alert(res.message);
          } else {
            alert("Error");
          }
        });
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    SetSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div>
        <img
          src="https://sso.masaischool.com/brand_dark.svg"
          alt="Masai Logo"
        />
      </div>
      <div>
        <h1>Sign Up</h1>
        <form style={formStyle}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="Email"
            value={Email}
            placeholder="Enter your email"
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="Name"
            value={Name}
            placeholder="Enter your Name"
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}> Password</label>
          <input
            type="password"
            name="Password"
            value={Password}
            placeholder="Enter your Password"
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="submit"
            value="SIGN UP"
            onClick={verifyData}
            style={btnStyle}
          />
        </form>{" "}
        <Link to="/">Already have an account? Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
const btnStyle = {
  width: "150px",
  padding: "10px 10px",
  fontSize: "16px",
  cursor: "pointer",
  marginLeft: "130px",
  marginTop: "20px",
  borderRadius: "5px",
  backgroundColor: "crimson",
  border: "none",
  color: "white",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "30%",
  marginLeft: "470px",
  gap: "10px",
  padding: "15px",
};
const inputStyle = {
  padding: "5px",
  fontSize: "18px",
  borderRadius: "8px",
};
const labelStyle = {
  fontSize: "18px",
  fontWeight: "bold",
};
