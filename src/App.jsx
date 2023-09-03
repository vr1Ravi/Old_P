import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Header/Sidebar/Sidebar";
import { useState } from "react";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  return (
    <>
      <Header currentWidth={windowWidth} />
      {windowWidth > 1000 && <Sidebar />}
    </>
  );
}

export default App;
