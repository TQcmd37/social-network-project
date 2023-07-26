import  { useState } from 'react';
import PropTypes from 'prop-types';
import PasswordMismatchModal from '../misMatchPassword/PasswordMisMatchModal';

const RegisterForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const [showPasswordMismatchModal, setShowPasswordMismatchModal] = useState(false);



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

const handleRegister = () => {
  if (password !== confirmPassword) {
    setShowPasswordMismatchModal(true);
    return;
  }}

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
      {showPasswordMismatchModal && (
        <PasswordMismatchModal onClose={() => setShowPasswordMismatchModal(false)} />
      )}
    </div>
   

  );
};

RegisterForm.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

export default RegisterForm;
