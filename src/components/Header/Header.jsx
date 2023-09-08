import { IoIosContact } from "react-icons/io";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayStyle } from "../../appStateSlice";
// eslint-disable-next-line react/prop-types
const Header = ({ currentWidth }) => {
  const dispatch = useDispatch();
  const displayStyle = useSelector((state) => state.appState.displayStyle);
  const handleClick = () => {
    dispatch(
      setDisplayStyle(
        displayStyle.display === "flex"
          ? {
              display: "none",
              width: "17rem",
              marginLeft: "0",
              marginTop: "6rem",
            }
          : {
              display: "flex",
              width: "17rem",
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
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
