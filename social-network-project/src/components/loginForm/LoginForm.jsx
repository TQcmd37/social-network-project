import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import RegisterForm from '../registerForm/RegisterForm';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleLogin = () => {
    axios.post('http://localhost:3000/auth/login', { email, password })
      .then((response) => {
        if(response.status === 200){
          const userData = response.data;
          //login(userData) estado global
          navigate('/home')
        }else{
          // showModal('Error', 'An error occurred')
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-80 md:w-4/5 lg:w-2/5 mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
                </label>
                <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                type="email"
                value={email}
                onChange={handleEmailChange}
                id="email"
                placeholder="Enter your email"
                />
            </div>
            <div className="mb-6 relative flex flex-col">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password:
                </label>
                <div>
                    <input
                        className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        id="password"
                        placeholder="Enter your password"
                    />
                    <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer mt-6"
                    onClick={togglePasswordVisibility}
                    >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                </div>
            </div>
            <div>
                <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin} 
                >
                Login
                </button>
            </div>
            <div className="mt-4">
                <button
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={openRegisterModal}
                >
                Create New Account
                </button>
            </div>
            {showRegisterModal && <RegisterForm onClose={closeRegisterModal} />}
        </div>
    </div>
   
  );
};

export default LoginForm;
