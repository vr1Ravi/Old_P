import HeroSecion from "../HeroSection/HeroSecion";
import "./Hero.scss";
import AmazonImg from "../assets/Project-1.jpg";
import SlackImg from "../assets/Slack.png";
import RecipeImg from "../assets/Recipe.jpg";
import PropertyListingImg from "../assets/PropertyListing.jpg";
import ReactImg from "../assets/ReactImg.jpg";
import JavascriptImg from "../assets/Javascript.jpg";
import HtmlAndCssImg from "../assets/HtmlAndCss.png";
import TailwindcssImg from "../assets/Tailwind.png";
import NodejsImg from "../assets/Nodejs.png";
import ExpressjsImg from "../assets/Express.png";
import MongodbImg from "../assets/Mongodb.png";
import MySqlImg from "../assets/MySql.png";
import JavaImg from "../assets/Java.png";
import GitGithubImg from "../assets/GitGithub.png";
const Hero = () => {
  return (
    <main>
      <div className="introBar">
        <div className="leftPart">
          <img
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt="Proflie_pic"
          />
        </div>
        <div className="rightPart">
          <h1>Ravishankar Jha</h1>
          <p>
            Hello, I'm a passionate MCA student with a strong interest in
            frontend development.
          </p>
        </div>
      </div>
      <HeroSecion
        title={"Projects"}
        items={[
          {
            id: 1,
            itemImage: SlackImg,
            itemName: "Slack Clone",
            itemLink: "https://slack-clone-d875a.web.app/",
            itemProgress: { width: "90%" },
          },
          {
            id: 2,
            itemImage: AmazonImg,
            itemName: "Amazon Clone",
            itemLink: "https://clone-26395.web.app/",
            itemProgress: { width: "100%" },
          },
          {
            id: 3,
            itemImage: RecipeImg,
            itemName: "Recipe App",
            itemLink: "https://v1recipe.netlify.app/",
            itemProgress: { width: "100%" },
          },
          {
            id: 4,
            itemImage: PropertyListingImg,
            itemName: "Property Listing",
            itemLink: "https://vr1ravi.github.io/real-web/",
            itemProgress: { width: "100%" },
          },
        ]}
      />
      <HeroSecion
        title={"Frontend"}
        items={[
          {
            id: 1,
            itemImage: ReactImg,
            itemName: "React.Js",
            itemLink: "/",
            itemProgress: { width: "75%" },
          },
          {
            id: 2,
            itemImage: JavascriptImg,
            itemName: "Javascript",
            itemLink: "/",
            itemProgress: { width: "80%" },
          },
          {
            id: 3,
            itemImage: HtmlAndCssImg,
            itemName: "Html, Css",
            itemLink: "/",
            itemProgress: { width: "80%" },
          },
          {
            id: 4,
            itemImage: TailwindcssImg,
            itemName: "Tailwind",
            itemLink: "/",
            itemProgress: { width: "20%" },
          },
        ]}
      />
      <HeroSecion
        title={"Backend"}
        items={[
          {
            id: 1,
            itemImage: NodejsImg,
            itemName: "Node.Js",
            itemLink: "/",
            itemProgress: { width: "25%" },
          },
          {
            id: 2,
            itemImage: ExpressjsImg,
            itemName: "Express.Js",
            itemLink: "/",
            itemProgress: { width: "10%" },
          },
        ]}
      />
      <HeroSecion
        title={"Database"}
        items={[
          {
            id: 1,
            itemImage: MongodbImg,
            itemName: "MongoDB",
            itemLink: "/",
            itemProgress: { width: "50%" },
          },
          {
            id: 2,
            itemImage: MySqlImg,
            itemName: "MySql",
            itemLink: "/",
            itemProgress: { width: "10%" },
          },
        ]}
      />
      <HeroSecion
        title={"Others"}
        items={[
          {
            id: 1,
            itemImage: JavaImg,
            itemName: "Java",
            itemLink: "/",
            itemProgress: { width: "90%" },
          },
          {
            id: 2,
            itemImage: GitGithubImg,
            itemName: "GitGithub",
            itemLink: "/",
            itemProgress: { width: "30%" },
          },
        ]}
      />
    </main>
  );
};

export default Hero;
