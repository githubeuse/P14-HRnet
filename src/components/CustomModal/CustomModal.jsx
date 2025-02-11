
import Modal from "@githubeuse/modal-plugin-react";
import PropTypes from "prop-types";
import "@githubeuse/modal-plugin-react/dist/modal.css"; 

/**
 * Composant CustomModal pour afficher une fenêtre modale personnalisée.
 * Utilise le composant Modal de la bibliothèque @githubeuse/modal-plugin-react.
 * 
 * @param {boolean} isOpen - Indique si la modale est ouverte.
 * @param {function} onClose - Fonction appelée pour fermer la modale.
 */


const CustomModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <span>Employee Created!</span>
    </Modal>
  );
};
CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomModal;
