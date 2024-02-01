import { FaTimes } from "react-icons/fa";
import { useMyContext } from "../App";

const ModalContent = () => {
  const value = useMyContext();
  const { openModal, setOpenModal } = value;

  return <section className="modal-container" style={{ display: `${openModal ? 'flex' : 'none'}` }}>
    <article className="modal" >
      <h4>modal content</h4>

    </article>
    <FaTimes onClick={() => setOpenModal(!openModal)} className="times" />
  </section>
}
export default ModalContent;