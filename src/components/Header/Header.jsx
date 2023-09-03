import { IoIosContact } from "react-icons/io";
import "./header.scss";
// eslint-disable-next-line react/prop-types
const Header = ({ currentWidth }) => {
  console.log(currentWidth);
  return (
    <>
      <header>
        {currentWidth > 1000 && (
          <div className="leftHeader">
            {/* Header Left circles */}
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <div className="rightHeader">
          <button>
            Contact Me <IoIosContact />
          </button>
          {currentWidth < 1000 && (
            <div className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
