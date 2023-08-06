
const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce" />
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce" />
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default Spinner;
