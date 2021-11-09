const AddPlayerModal = ({ toggleModal }) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => toggleModal()}
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="w-3/4 my-0 mx-auto sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h2
                  className="text-3xl leading-6 font-medium text-gray-900 text-center mb-8 mt-4"
                  id="modal-title"
                >
                  Add a player
                </h2>
                <div className="mt-2">
                  <form>
                    <div className="my-4">
                      <input
                        className="shadow appearance-none border rounded w-full  py-4 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                        id="player"
                        type="text"
                        placeholder="Add Player"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 pb-3 sm:px-6 sm:flex justify-center">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm md:text-lg"
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlayerModal;
