import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./page/Admin";
import Edit from "./page/Edit";
import List from "./page/List";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Student from "./page/Student";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
