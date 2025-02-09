// filepath: /c:/Projects/P14HRnet/P12_Front-end/react/types/githubeuse__modal-plugin-react.d.ts
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