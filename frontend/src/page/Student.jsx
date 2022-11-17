import React from "react";
import NavBarStudent from "../componenet/NavbarStudent";
import { Link } from "react-router-dom";
const Student = () => {
  const [CompanyData, setCompanyData] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://mongodbserverak.herokuapp.com/company/search`)
      .then((res) => res.json())
      .then((res) => setCompanyData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBarStudent />
      <h1>Welcome To Masai School</h1>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Contract</th>
            <th>Location</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          {CompanyData.map((cd, i) => (
            <tr key={i}>
              <td>{cd.CompanyName}</td>
              <td>{cd.Position}</td>
              <td>{cd.Contract}</td>
              <td>{cd.Location}</td>
              <td>
                <Link>Apply</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
