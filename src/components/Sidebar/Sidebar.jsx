import "./Sidebar.scss";
import { FaHome } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import SidebarChild from "../SidebarChild/SidebarChild";
import { SlSocialGithub } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineSlack } from "react-icons/ai";
import { AiOutlineAmazon } from "react-icons/ai";
import { GiCampCookingPot } from "react-icons/gi";
import { RiBuilding3Fill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { setDisplayStyle } from "../../appStateSlice";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const Sidebar = ({ currentWidth }) => {
  const dispatch = useDispatch();
  const displayStyle = useSelector((state) => state.appState.displayStyle);
  useEffect(() => {
    if (currentWidth <= 1000) {
      dispatch(
        setDisplayStyle({
          display: "none",
          marginLeft: "0",
          marginTop: "6rem",
        })
      );
    } else {
      dispatch(
        setDisplayStyle({
          display: "flex",
          marginLeft: "2rem",
          marginTop: "6rem",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentWidth]);

  const handleClick = () => {
    dispatch(
      setDisplayStyle({
        display: "none",
        marginLeft: "0",
        marginTop: "6rem",
      })
    );
  };
  return (
    <aside style={displayStyle}>
      <div className="sideBarCross" onClick={handleClick}>
        <div className="sideBarCross__line"></div>
        <div className="sideBarCross__line"></div>
      </div>
      <SidebarChild
        title={""}
        items={[
          {
            link: (
              <>
                <a href="/">
                  <FaHome />
                  <p>Home</p>
                </a>
              </>
            ),
          },
          {
            link: (
              <>
                <a href="/">
                  {" "}
                  <BiCodeCurly />
                  <p>Snippets</p>
                </a>
              </>
            ),
          },
        ]}
      />
      <SidebarChild
        title={"Socials"}
        items={[
          {
            link: (
              <>
                <a
                  href="https://github.com/vr1Ravi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SlSocialGithub style={{ color: "rgb(42 157 143)" }} />
                  <p>GitHub</p>
                </a>
              </>
            ),
          },
          {
            link: (
              <>
                <a
                  href="https://leetcode.com/Ravi_ok/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLeetcode style={{ color: "#ffa116" }} />
                  <p>Leetcode</p>
                </a>
              </>
            ),
          },
          {
            link: (
              <>
                <a
                  href="https://www.hackerrank.com/ravikumarjha059?hr_r=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaHackerrank style={{ color: "#32c766" }} />
                  <p>HackerRank</p>
                </a>
              </>
            ),
          },
          {
            link: (
              <>
                <a
                  href="https://www.linkedin.com/in/ravishankar-jha-408679216/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin style={{ color: "rgba(59,130,246,.5)" }} />
                  <p>Linkedin</p>
                </a>
              </>
            ),
          },
        ]}
      />
      <SidebarChild
        title={"Projects"}
        items={[
          {
            link: (
              <>
                <a
                  href="https://github.com/vr1Ravi/Slack-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineSlack style={{ color: "#8b8a91" }} />
                  <p>Slack Clone</p>
                </a>
              </>
            ),
            name: "Slack Clone",
          },
          {
            link: (
              <>
                <a
                  href="https://github.com/vr1Ravi/Amazon-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <AiOutlineAmazon style={{ color: "#8b8a91" }} />
                  <p>Amazone Clone</p>
                </a>
              </>
            ),
          },
          {
            link: (
              <>
                <a
                  href="https://github.com/vr1Ravi/Recipe-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GiCampCookingPot style={{ color: "#8b8a91" }} />
                  <p>Recipe App</p>
                </a>
              </>
            ),
          },
          {
            link: (
              <>
                <a
                  href="https://github.com/vr1Ravi/real-web"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiBuilding3Fill style={{ color: "#8b8a91" }} />
                  <p>Propert Listing</p>
                </a>
              </>
            ),
          },
        ]}
      />
    </aside>
  );
};

export default Sidebar;
