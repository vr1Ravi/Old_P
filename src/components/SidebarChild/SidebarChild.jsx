import "./SidebarChild.scss";
import "../Sidebar/Sidebar.scss";
// eslint-disable-next-line react/prop-types
const SidebarChild = ({ title = "", items = [] }) => {
  console.log(items[0]);

  return (
    <>
      <div className="links">
        <h4>{title !== "" && title}</h4>
        {items.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="link">{item.link}</div>
          );
        })}
      </div>
    </>
  );
};

export default SidebarChild;
