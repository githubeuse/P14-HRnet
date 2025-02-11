import "./EmployeesList.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Table from "../../components/Table/Table";
import Header from "../../components/Header/Header";

import { clearEmployees } from "../../store/features/employees/employeesSlice";

const EmployeesList = () => {
  const dispatch = useDispatch();

  // Fonction pour effacer tous les employés
  const handleClear = () => {
    dispatch(clearEmployees());
  };
  return (
    <div>
      <Header />
      <Table />
      <Link to="/">
        <span className="homeLink">Home</span>
      </Link><br/>
      <button className="clearButton" onClick={handleClear}>
        {" "}
        Effacer
      </button>
    </div>
  );
};

export default EmployeesList;
