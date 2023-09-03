import "./Sidebar.scss";
import { FaHome } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
const Sidebar = () => {
  return (
    <aside>
      <div className="links">
        <div className="link">
          <FaHome />
          <p>Home</p>
        </div>
        <div className="link">
          <BiCodeCurly />
          <p>Snippets</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
