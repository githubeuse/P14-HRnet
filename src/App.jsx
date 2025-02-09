import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import CustomModal from "./components/CustomModal/CustomModal";

import "./App.css";

function App() {
  // État pour gérer l'ouverture de la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="appDiv">
      {/* En-tête de l'application */}
      <Header />
      <h2>Create Employee</h2>

      {/* Lien vers la liste des employés */}
      <Link to="/employeesList">View Current Employees</Link>

      {/* Formulaire pour créer un employé, ouvre la modale lors de la soumission */}
      <Form onSubmit={() => setIsModalOpen(true)} />
      
      {/* Modale affichée lors de la création d'un employé */}
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
      <h2>Documentation</h2>
      <h2>Rapport de performance</h2>
      <h2>Test</h2>
    </div>
  );
}

export default App;
