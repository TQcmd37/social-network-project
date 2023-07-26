import PropTypes from 'prop-types';

const PasswordMismatchModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h1 className="text-lg font-bold mb-4 text-center">Passwords don&apos;t match</h1>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  PasswordMismatchModal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };
  
  export default PasswordMismatchModal;
  