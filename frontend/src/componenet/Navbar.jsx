import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={NavbarCSS}>
      <Link to="/admin" style={linkCSS}>
        Job
      </Link>
      <Link to="/list" style={linkCSS}>
        JobList
      </Link>
    </div>
  );
};

export default Navbar;
const NavbarCSS = {
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "crimson",
  color: "white",
  padding: "20px",
};
const linkCSS = {
  textDecoration: "none",
  color: "white",
  fontSize: "25px",
  fontWeight: "700",
  fontFamily: "Arial",
};
