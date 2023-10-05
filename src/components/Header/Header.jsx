import { IoIosContact } from "react-icons/io";
import { ImCross } from "react-icons/im";
import "./Header.scss";
import Modal from "../../Modal";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayStyle } from "../../appStateSlice";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
// eslint-disable-next-line react/prop-types
const Header = ({ currentWidth }) => {
  const [background, setBackground] = useState("");
  const [showContact, setshowContact] = useState(false);
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
  const handleContactClick = () => {
    setshowContact(true);
    console.log("clicked");
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
          <button onClick={handleContactClick}>
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
        {showContact ? (
          <Modal>
            <div className="modal">
              <div className="contacts">
                <div className="contact_medium">
                  <BsFillTelephoneFill />
                  <p>+918709547746</p>
                </div>
                <div className="contact_medium">
                  <HiMail /> <p>ravikumarjha059@gmail.com</p>
                </div>
              </div>

              <button onClick={() => setshowContact(false)}>
                <ImCross />
              </button>
            </div>
          </Modal>
        ) : null}
      </nav>
    </>
  );
};

export default Header;
