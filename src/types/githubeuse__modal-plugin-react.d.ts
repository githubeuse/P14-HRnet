declare module '@githubeuse/modal-plugin-react' {
    import { ReactNode } from 'react';
  
    interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      children?: ReactNode;
    }
  
    const Modal: React.FC<ModalProps>;
  
    export default Modal;
  }