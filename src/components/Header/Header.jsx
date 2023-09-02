import { IoIosContact } from "react-icons/io";
import "./header.scss";
const Header = () => {
  return (
    <>
      <header>
        <div className="leftHeader">
          {/* Header Left circles */}
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="rightHeader">
          <button>
            Contact Me <IoIosContact />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
