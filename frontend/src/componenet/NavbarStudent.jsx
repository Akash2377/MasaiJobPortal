import React from "react";
import { Link } from "react-router-dom";

const NavBarStudent = () => {
  return (
    <div style={NavbarCSS}>
      <Link to="/student" style={linkCSS}>
        Job
      </Link>
      <Link style={linkCSS}>Applied Jobs</Link>
    </div>
  );
};

export default NavBarStudent;
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
