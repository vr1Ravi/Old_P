import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header currentWidth={windowWidth} />
              {windowWidth > 1000 && <Sidebar />}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
