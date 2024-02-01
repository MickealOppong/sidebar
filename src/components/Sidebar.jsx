import { FaTimes } from "react-icons/fa";
import { useMyContext } from "../App";
import { icons, links } from "../data/data";


const Sidebar = () => {
  const value = useMyContext();
  const { showSidebar, setShowSidebar } = value;

  const closeSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return <section className="sidebar-container" style={{ transform: `${showSidebar ? 'translateX(0)' : 'translateX(-100%)'}` }}>
    <aside className="sidebar">
      <h1 className="logo">sea<span>Horse</span></h1>
      <article className="links-container">
        <ul className="links">
          {
            links.map((link) => {
              const { id, icon, text } = link;
              return <li key={id}>{icon}<a href="">{text}</a></li>
            })
          }
        </ul>
      </article>
      <article className="icons-container">
        <ul className="icons">
          {
            icons.map((link) => {
              const { id, icon, url } = link;
              return <li key={id}><a href={url}>{icon}</a></li>
            })
          }
        </ul>
      </article>
    </aside>
    <FaTimes className="close-btn" onClick={closeSidebar} />
  </section>
}

export default Sidebar;