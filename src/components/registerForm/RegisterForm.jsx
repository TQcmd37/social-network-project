import  { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

const RegisterForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalTitle, setModalTitle] = useState(''); 
  const [modalMessage, setModalMessage] = useState('');
  const [showModalWindow, setShowModalWindow] = useState(false);


  const MIN_PASSWORD_LENGTH = 6;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value);
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidUserName = (userName) => {
    const userNameRegex = /^[a-zA-Z0-9_]+$/;
    return userNameRegex.test(userName);
  };

const showModal = (title, message) => {
    setShowModalWindow(true);
    setModalTitle(title);
    setModalMessage(message);
};
  const handleRegister = () => {
    if (!email || !password || !username || !confirmPassword) {
        showModal('Error', 'Please fill in all required fields.');
        return;
      }
  
      if (!isValidEmail(email)) {
        showModal('Invalid Email', 'Please enter a valid email address.');
        return;
      }
  
    if (password !== confirmPassword) {
      showModal("Passwords don't match", "Please make sure the passwords match and try again.");
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      showModal("Password too short", "Password must have at least 6 characters.");
      return;
    }
    if (!isValidUserName(username)) {
        showModal('Invalid Username', 'Username can only contain letters, numbers, and underscores.');
        return;
      }
  
    // Resto de la lógica de registro si pasa todas las validaciones
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Let&apos;s Register</h1>
        <h2 className="text-lg text-gray-600 mb-4">It&apos;s easy and fast</h2>
        <input
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <input
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        <input
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm your password"
        />
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      {showModalWindow && (
        <Modal
            modalTitle={modalTitle}
            modalMessage={modalMessage}
            onClose={() => setShowModalWindow(false)}
        />
        )}
    </div>

  );
};

RegisterForm.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

export default RegisterForm;
