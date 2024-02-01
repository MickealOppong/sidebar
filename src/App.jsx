import { createContext, useContext, useState } from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import ToggleButton from './components/ToggleButton';
import './index.css';

const SidebarContext = createContext(null);
export const useMyContext = () => useContext(SidebarContext);

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false)


  const openSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return <main>
    <SidebarContext.Provider value={{ setShowSidebar, showSidebar, setOpenModal, openModal }}>
      <ToggleButton handleClick={openSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <Modal />
    </SidebarContext.Provider>


  </main>
}

export default App
