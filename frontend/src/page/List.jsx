import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../componenet/Navbar";
const List = () => {
  const [CompanyData, setCompanyData] = React.useState([]);
  const deleteData = (id) => {
    fetch(`https://mongodbserverak.herokuapp.com/company/delete/${id}`, {
      method: "DELETE",
    });
  };
  React.useEffect(() => {
    fetch(`https://mongodbserverak.herokuapp.com/company/search`)
      .then((res) => res.json())
      .then((res) => setCompanyData(res))
      .catch((err) => console.log(err));
  }, [deleteData]);

  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Contract</th>
            <th>Location</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {CompanyData.map((cd, i) => (
            <tr key={i}>
              <td>{cd.CompanyName}</td>
              <td>{cd.Position}</td>
              <td>{cd.Contract}</td>
              <td>{cd.Location}</td>

              <td onClick={() => deleteData(cd._id)} style={tableStyle}>
                Delete
              </td>
              <td>
                <Link to={`/edit/${cd._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
const tableStyle = {
  cursor: "pointer",
  color: "red",
};
