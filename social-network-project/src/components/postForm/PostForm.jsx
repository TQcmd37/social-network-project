import { useState } from 'react';
import PropTypes from 'prop-types';
import { User, Send } from 'react-feather';

const PostForm = ({ onSubmit }) => {
  const [postText, setPostText] = useState('');

  const handleInputChange = (e) => {
    setPostText(e.target.value);
  };

  const handleSubmit = () => {
    if (postText.trim() !== '') {
      onSubmit(postText);
      setPostText('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="w-6 h-6 text-gray-600" />
          </div>
        </div>
        <div className="flex-grow">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            value={postText}
            onChange={handleInputChange}
            placeholder="What are you thinking?"
          />
        </div>
        <div className="flex-shrink-0">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
PostForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default PostForm;
