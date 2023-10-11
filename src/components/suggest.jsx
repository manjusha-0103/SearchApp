import React from "react";
import "./style/suggest.css";
import data from "./cads.jsx";
import { InfoBox } from "./OutsideClick";
import setClick from "./searchbar"
import { Link } from "react-router-dom";

const Suggest = (props) => {
  return (
    <div>
      <InfoBox show={onclick} onClickOutside={() => {props.onclick = true}} message="Click outside to close this"/>
      <div className="suggest">
        <div
          className="LatestTrends"
          style={{
            color: "black",
            fontSize: 21.97,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Latest Trends
        </div>
        <div className="trendimg">
          {data
            .filter((val) => {
              if (val.stars === 5 && val.id <= 5) {
                //console.log(val);
                return val;
              } else {
                return null;
              }
            })
            .map((val,i) => {
              return (
                <>
                  <div className="card" key={i}>
                    <img src={val.img} alt="" />
                    <p>{val.title}</p>
                  </div>
                  
                </>
              );
            })}
        </div>
        <div className="popular-s">
          <h2>Popular Suggestions</h2>
          {data
            .filter((val) => {
              
              if (val.stars === 5 && val.id <= 10 && val.id > 5) {
                console.log(val)
                return val;
              } 
              else {
                return null;
              }
            })
            .map((val,i) => {
              return (
                <>
                  
                    <div key={i}>
                      <p>{val.title}</p>
                    </div>
                 
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Suggest;
