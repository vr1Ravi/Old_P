import { IoIosContact } from "react-icons/io";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayStyle } from "../../appStateSlice";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Header = ({ currentWidth }) => {
  const [background, setBackground] = useState("");
  const dispatch = useDispatch();
  const displayStyle = useSelector((state) => state.appState.displayStyle);
  if (displayStyle.display === "none" && background === "bg") setBackground("");
  const handleClick = (e) => {
    setBackground(background === "bg" ? "" : "bg");
    console.log(e.target);
    dispatch(
      setDisplayStyle(
        displayStyle.display === "flex"
          ? {
              display: "none",
              marginLeft: "0",
              marginTop: "6rem",
            }
          : {
              display: "flex",
              marginLeft: "0",
              marginTop: "6rem",
            }
      )
    );
  };

  return (
    <>
      <nav>
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
            <div className="hamburger" onClick={handleClick}>
              <div className={background}></div>
              <div className={background}></div>
              <div className={background}></div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
