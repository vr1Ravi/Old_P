import "./HeroSecion.scss";

// eslint-disable-next-line react/prop-types
const HeroSecion = ({ title, items = [] }) => {
  return (
    <div className="section">
      <h1 className="heading">{title}</h1>
      <div className="cards">
        {items.map((item) => {
          return (
            <a
              key={item.id}
              href={item.itemLink}
              className="card"
              target="_blank"
              rel="noreferrer"
              style={item.itemLink === "" ? { pointerEvents: "none" } : {}}
            >
              <div className="projectImage">
                <img src={item.itemImage} alt="" />
                <div className="progressBar" style={item.itemProgress}></div>
              </div>

              <div className="projectInfo">
                <p>{item.itemName}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSecion;
