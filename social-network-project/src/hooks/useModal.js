
// src/hooks/useModal.js

import { useState } from 'react';

const useModal = () => {
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModalWindow, setShowModalWindow] = useState(false);

  const showModal = (title, message) => {
    setShowModalWindow(true);
    setModalTitle(title);
    setModalMessage(message);
  };

  const closeModal = () => {
    setShowModalWindow(false);
  };

  return {
    showModal,
    closeModal,
    modalTitle,
    modalMessage,
    showModalWindow,
  };
};

export default useModal;
