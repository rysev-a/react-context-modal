import { createContext } from 'react';

const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  Content: () => null,
});

export default ModalContext;
