import React from "react";
//import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes} from "react-router-dom";
import './scss/main.scss';
import LandingPage from "./components/LandingPage/LandingPage";

const App = () => (
  <>
      <HashRouter>
      {/* <BrowserRouter> */}
          <Routes>
              <Route path={"/"} element={<LandingPage/>}></Route>
              {/* <Route path={"admin"} element={<AdminPanel />}></Route> */}
          </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
  </>
)

export default App;
