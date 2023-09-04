import "./Sidebar.scss";
import { FaHome } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import SidebarChild from "../SidebarChild/SidebarChild";
import { SlSocialGithub } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineSlack } from "react-icons/ai";
import { AiOutlineAmazon } from "react-icons/ai";
import { GiCampCookingPot } from "react-icons/gi";
const Sidebar = () => {
  return (
    <aside>
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
                  href="https://slack-clone-d875a.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineSlack style={{ color: "#8b8a91" }} />
                  <p>Slack Clone</p>
                </a>
              </>
            ),
            // icon: <AiOutlineSlack style={{ color: "#8b8a91" }} />,
            name: "Slack Clone",
          },
          {
            link: (
              <>
                <a
                  href="https://clone-26395.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <AiOutlineAmazon style={{ color: "#8b8a91" }} />
                  <p>Amazone Cloe</p>
                </a>
              </>
            ),
          },
          {
            link: (
              <>
                <a
                  href="https://v1recipe.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GiCampCookingPot style={{ color: "#8b8a91" }} />
                  <p>Recipe App</p>
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
