import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import CustomModal from "./components/CustomModal/CustomModal";

import "./App.css";

function App() {
  // État pour gérer l'ouverture de la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [resetForm, setResetForm] = useState(false);

  // Fonction pour fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
    setResetForm(true);
  };

  return (
    <div className="appDiv">
      {/* En-tête de l'application */}
      <Header />

      {/* Lien vers la liste des employés */}
      <Link className="linkToEmployeesList" to="/employeesList">View Current Employees</Link>

      <h2>Create Employee</h2>

      {/* Formulaire pour créer un employé, ouvre la modale lors de la soumission */}
      <Form onSubmit={() => setIsModalOpen(true)} resetForm={resetForm} setResetForm={setResetForm} />

      {/* Modale affichée lors de la création d'un employé */}
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
