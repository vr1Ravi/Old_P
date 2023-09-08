import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import { useState } from "react";

function App() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setCurrentWidth(window.innerWidth);
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header currentWidth={currentWidth} />
                <div className="flex">
                  {<Sidebar currentWidth={currentWidth} />}
                  <Hero />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
