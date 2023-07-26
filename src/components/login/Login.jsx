import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          type="email"
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
        >
          Login
        </button>
      </div>
      <div className="mt-4">
        <button
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
