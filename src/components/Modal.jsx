import { useMyContext } from "../App";
import ModalContent from "./ModalContent";

const Modal = () => {
  const value = useMyContext();
  const { setOpenModal, openModal, setShowSidebar } = value;

  const showModal = () => {
    setOpenModal(true)
    setShowSidebar(false)
  }
  return <div className="modal-btn-container">
    <button className="modal-btn btn" onClick={showModal}>open modal</button>
    <ModalContent />
    <div className="overlay" style={{ display: `${openModal ? 'flex' : 'none'}` }}></div>
  </div>
}
export default Modal;