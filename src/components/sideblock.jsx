import React, { useState } from "react";
import "./style/searchresult.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import data from "./cads";



const Sideblock = ({ props }) => {
  return (
    <>
      <div className="brand-box">
        <div className="dropdown-btn">
          <h3>BRANDS</h3>
          <KeyboardArrowDownIcon />
        </div>
        <div className="filter-box">
            <label className="sidebar-label-container">
                <input  type="radio" value="MANGO" name="MANGO" />
                <span className="checkmark" style={{ }}></span>
                MANGO
            </label>
            <label className="sidebar-label-container">
                <input  type="radio" value="H&M"name="H&M" />
                <span className="checkmark" style={{ }}></span>
                H&M
            </label>
        </div>
      </div>
      <div className="price-box">
        <div className="dropdown-btn">
          <h3>PRICE RANGES</h3>
          <KeyboardArrowDownIcon />
        </div>
        <div className="filter-box">
            <label className="sidebar-label-container">
                <input  type="radio" value="MANGO" name="MANGO" />
                <span className="checkmark" style={{ }}></span>
                Rs.0-210
            </label>
            <label className="sidebar-label-container">
                <input  type="radio" value="H&M"name="H&M" />
                <span className="checkmark" style={{ }}></span>
                Rs.210-500
            </label>
            <label className="sidebar-label-container">
                <input  type="radio" value="H&M"name="H&M" />
                <span className="checkmark" style={{ }}></span>
                Rs.Over 500
            </label>
        </div>
      </div>
      <div className="ratings-box">
        <div className="dropdown-btn">
          <h3>RATINGS</h3>
          <KeyboardArrowDownIcon />
        </div>
        <div className="filter-box">
            <label className="sidebar-label-container">
                <input  type="checkbox" value="MANGO" name="MANGO" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
            </label>
            <label className="sidebar-label-container">
                <input  type="checkbox" value="H&M"name="H&M" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarBorderIcon sx={{ color: "gray" }}/>
            </label>
            <label className="sidebar-label-container">
                <input  type="checkbox" value="H&M"name="H&M" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarBorderIcon sx={{ color: "gray" }}/>
                <StarBorderIcon sx={{ color: "gray" }}/>
            </label>
            <label className="sidebar-label-container">
                <input  type="checkbox" value="H&M"name="H&M" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarBorderIcon sx={{ color: "gray" }}/>
                <StarBorderIcon sx={{ color: "gray" }}/>
                <StarBorderIcon sx={{ color: "gray" }}/>
            </label>
            <label className="sidebar-label-container">
                <input  type="checkbox" value="H&M"name="H&M" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarBorderIcon sx={{ color: "gray" }} />
                <StarBorderIcon sx={{ color: "gray" }} />
                <StarBorderIcon sx={{ color: "gray" }} />
                <StarBorderIcon sx={{ color: "gray" }} />
            </label>
        </div>
      </div>
    </>
  );
};

export default Sideblock;
