
import Modal from "@githubeuse/modal-plugin-react";
import PropTypes from "prop-types";
import "@githubeuse/modal-plugin-react/dist/modal.css"; 


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
