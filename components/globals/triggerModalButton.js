import Link from "next/link";
import AddPlayerModal from "./addPlayerModal";

const TriggerModalButton = ({ words, toggleModal }) => {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => toggleModal()}
    >
      {" "}
      {words}
    </button>
  );
};

export default TriggerModalButton;
