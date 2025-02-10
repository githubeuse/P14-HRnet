import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";

import Table from "../../components/Table/Table";
import Header from "../../components/Header/Header";

import { clearEmployees } from "../../store/features/employees/employeesSlice";
import "./employeesList.css";

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  // Fonction pour effacer tous les employés
  const handleClear = () => {
    dispatch(clearEmployees());
  };

  // Colonnes pour le tableau des employés
  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true, width: '120px' }, //1
    { name: "Last Name", selector: (row) => row.lastName, sortable: true, width: '120px' }, //2

    {
      name: "Start date",
      selector: (row) => format(new Date(row.startDate), "dd/MM/yyyy"),
      sortable: true,
      width: '120px'
    }, //3

    {
      name: "Department",
      selector: (row) => row.department?.value,
      sortable: true,
      width: '150px'
    }, //4
    {
      name: "Date of birth",
      selector: (row) => format(new Date(row.dateOfBirth), "dd/MM/yyyy"),
      sortable: true, width: '120px'
    }, //5
    { name: "Street", selector: (row) => row.street, sortable: true, width: '180px' }, //6
    { name: "City", selector: (row) => row.city, sortable: true, width: '120px' }, //7
    {
      name: "State",
      selector: (row) => row.state?.abbreviation,
      sortable: true,
      width: '120px'
    }, //8
    { name: "Zip Code", selector: (row) => row.zipCode, sortable: true }, //9
  ];

  return (
    <div className="employeesListContainer">
      <Header />
      <h2>Current Employees</h2>
      <div className="tableContainer">
        <Table columns={columns} data={employees} />
      </div>
      <button className="clearButton" onClick={handleClear}> Effacer</button>
    </div>
  );
};

export default EmployeesList;