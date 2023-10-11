import "./App.css";
import Searchbar from "./components/searchbar";
import LogoDesign from "./images/home/LogoDesign.svg";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import data from "./components/cads";

const Comp = () => {
  return (
    <>
      
    </>
  );
};

function App() {
  return (
    <div className="App">
        <div className="logo">
          <img
            className="ZeviGgLogodesognOption2Black221"
            style={{ width: "62%", height: "100%" }}
            src={LogoDesign}
          />
        </div>
        <div className="s-bar">
          <Searchbar />
        </div>
      </div>
  );
}

export default App;
