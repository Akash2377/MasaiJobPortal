import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoginSuccess } from "../Redux/action";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = React.useState({
    Email: "",
    Password: "",
  });
  const { Email, Password } = loginData;
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const verifyData = (e) => {
    e.preventDefault();
    if (Email === "" || Password === "") {
      alert("Please enter your email and password");
    } else {
      fetch(`https://mongodbserverak.herokuapp.com/signin/user`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            dispatch(isLoginSuccess(true));
            if (res.message === "Admin") {
              navigator("/admin");
            } else {
              navigator("/student");
            }
            return;
          } else {
            alert("Wrong Credentials");
          }
        });
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginData((prev) => ({
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
        <h1>Sign in</h1>
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

          <label style={labelStyle}>Password</label>
          <input
            type="password"
            name="Password"
            value={Password}
            placeholder="Enter your password"
            style={inputStyle}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="SIGN IN"
            onClick={verifyData}
            style={btnStyle}
          />
        </form>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
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
