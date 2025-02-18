import "./EmployeesList.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Table from "../../components/Table/Table";
import Header from "../../components/Header/Header";

import { clearEmployees } from "../../store/features/employees/employeesSlice";

/**
 * Composant EmployeesList pour afficher la liste des employés.
 * 
 * Ce composant inclut un en-tête, une table pour afficher les employés,
 * un lien vers la page d'accueil et un bouton pour effacer tous les employés.
 */

const EmployeesList = () => {
  const dispatch = useDispatch();

  // Fonction pour effacer tous les employés
  const handleClear = () => {
    dispatch(clearEmployees());
  };
  return (
    <div>
      <Header />
      <h2>Current Employees</h2>
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
