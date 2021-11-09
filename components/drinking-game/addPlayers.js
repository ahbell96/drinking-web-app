import AddPlayerModal from "../globals/addPlayerModal";
import TriggerModalButton from "../globals/triggerModalButton";
import { useState } from "react";
const AddPlayers = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  return (
    <div>
      <p>Add Players</p>
      {/* <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => toggleModal()}
      >
        add player
      </button> */}
      <TriggerModalButton
        words="add player"
        toggleModal={() => toggleModal()}
      />
      {console.log(showModal)}
      {showModal && <AddPlayerModal toggleModal={() => toggleModal()} />}
    </div>
  );
};

export default AddPlayers;
