import "./SidebarChild.scss";
import "../Sidebar/Sidebar.scss";
// eslint-disable-next-line react/prop-types
const SidebarChild = ({ title = "", items = [] }) => {
  return (
    <>
      <div className="links">
        <h4>{title !== "" && title}</h4>
        {items.map((item, idx) => {
          return (
            <div className="link" key={idx}>
              {item.link}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SidebarChild;
