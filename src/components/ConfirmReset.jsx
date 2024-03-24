const ConfirmReset = ({ cancelReset, confirmReset }) => {
  return (
    <div className=" h-screen w-screen bg-gray-700 bg-opacity-60 fixed top-0 flex justify-center items-center">
      <div className="h-48 w-56 rounded-lg flex flex-col items-start justify-start pt-8 gap-4 bg-white shadow-lg text-gray-600 mb-10">
        <div className="mx-2 text-gray-700 text-center">
          Are you sure you want to reset everything?
        </div>
        <div className="flex justify-center gap-6 w-full items-end h-10">
          <div
            className="text-gray-400 select-none hover:text-gray-600 transition-colors duration-100"
            onClick={cancelReset}
          >
            Cancel
          </div>
          <div
            className="text-red-500 select-none hover:text-red-700 transition-colors duration-100"
            onClick={confirmReset}
          >
            Reset
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReset;
