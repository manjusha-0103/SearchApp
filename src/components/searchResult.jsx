import React, {  useState } from "react";
import "./style/searchresult.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const Card = ({props}) => {
  const [onhover, setHover] = useState(false);
  const [likes, setLikes] = useState(false);
  const handleLike = () => {
    setLikes(!likes);
  };
  return (
    <>
      <div
        className="r-card"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        key = {props.id}
      >
        <div className="r-img">
          {likes ? (
            <FavoriteIcon
              sx={{
                mt: "1rem",
                ml: "16%",
                color: "red",
                borderColor: "red",
                position: "absolute",
              }}
              onClick={handleLike}
            />
          ) : (
            <>
              <FavoriteBorderIcon
                sx={{
                  mt: "1rem",
                  color: "gray",
                  ml: "16%",
                  position: "absolute",
                }}
                onClick={handleLike}
              />
            </>
          )}
          <img src={props.img} alt="" />
          {onhover && (
            <>
              <div
                className="Rectangle11"
                style={{
                  marginTop: "-3.65%",
                  width: "18.9%",
                  height: "7%",
                  background: "rgba(109, 132, 255, 0.71)",
                  position: "absolute",
                  alignItems: "center",
                }}
              >
                <h3
                  className="ViewProduct"
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  View Product
                </h3>
              </div>
            </>
          )}
        </div>
        <div className="pro-details">
          <h3>{props.title}</h3>

          <h3 style={{color:'#6D84FF'}}>
            <del style={{ color: "gray", }}>{props._price}</del> {props.price}
          </h3>

          <div
            style={{
              marginTop:'-9%',
              display: "flex",
              alignItems: "center",
              justifyItems: "self-start",
            }}
          >
            <StarIcon sx={{ color: "yellow" }} /> <h4>({props.stars})</h4>
          </div>
        </div>
      </div>
    </>
  );
};



const SearchResult = ({ props }) => {
  const [wishlist, setWishlist] = useState([]);
  const [ischeck, setCheck] = useState(false)
  const [checkvalue,setCheckvalue] = useState({})
  //let result = props;

  const handleInput = (event)=>{
    
      setCheck(!ischeck)
      setCheckvalue(event.target);
  }
  const Filter = (checkvalue) => {
    if (!checkvalue) {
      return props; 
    } else {
      let r = [];
      if (checkvalue.name === "price") {
        for (let item of props) {
          switch (parseInt(checkvalue.value, 10)) {
            case 210:
              if (item.price < 210) {
                r.push(item);
              }
              break; // Add break statement to exit the switch
            case 500:
              if (item.price >= 210 && item.price < 500) {
                r.push(item);
              }
              break;
            case 1000:
              if (item.price >= 500) {
                r.push(item);
              }
              break;
            default:
              r.push(item);
          }
        }
      }
      if (checkvalue.name === "stars") {
        for (let item of props) {
          switch (parseInt(checkvalue.value, 10)) {
            case 5:
              if (item.stars === 5) {
                r.push(item);
              }
              break;
            case 4:
              if (item.stars === 4) {
                r.push(item);
              }
              break;
            case 3:
              if (item.stars === 3) {
                r.push(item);
              }
              break;
            case 2:
              if (item.stars === 2) {
                r.push(item);
              }
              break;
            case 1:
              if (item.stars === 1) {
                r.push(item);
              }
              break;
            default:
              r.push(item);
          }
        }
      }
      return r;
    }
  };
  
  let result = Filter(checkvalue)||props;

  return (
    <>
      <div className="sm-r">
        <div
          className="SearchResults"
          style={{
            color: "black",
            fontSize: 32,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Search Results
        </div>
        <div className="s-r">
          <div className="sidebar">
          <div className="brand-box">
        <div className="dropdown-btn">
          <h3>BRANDS</h3>
          <KeyboardArrowDownIcon />
        </div>
        <div className="filter-box">
            <label className="sidebar-label-container">
                <input  type="checkbox" value="MANGO" name="MANGO" />
                <span className="checkmark" style={{ }}></span>
                MANGO
            </label>
            <label className="sidebar-label-container">
                <input  type="checkbox" value="H&M"name="H&M" />
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
                <input onChange={handleInput} type="checkbox" value="210" name="price" />
                <span className="checkmark" style={{ }}></span>
                Rs.0-210
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleInput} type="checkbox" value="500"name="price" />
                <span className="checkmark" style={{ }}></span>
                Rs.210-500
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleInput} type="checkbox" value="1000"name="price" />
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
                <input onChange={handleInput} type="checkbox" value="5" name="stars" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleInput} type="checkbox" value="4"name="stars" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarBorderIcon sx={{ color: "gray" }}/>
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleInput} type="checkbox" value="3"name="stars" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarBorderIcon sx={{ color: "gray" }}/>
                <StarBorderIcon sx={{ color: "gray" }}/>
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleInput} type="checkbox" value="2"name="stars"  />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarIcon sx={{ color: "yellow" }} />
                <StarBorderIcon sx={{ color: "gray" }}/>
                <StarBorderIcon sx={{ color: "gray" }}/>
                <StarBorderIcon sx={{ color: "gray" }}/>
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleInput} type="checkbox" value="1"name="1" />
                <span className="checkmark" style={{ }}></span>
                <StarIcon sx={{ color: "yellow" }} />
                <StarBorderIcon sx={{ color: "gray" }} />
                <StarBorderIcon sx={{ color: "gray" }} />
                <StarBorderIcon sx={{ color: "gray" }} />
                <StarBorderIcon sx={{ color: "gray" }} />
            </label>
        </div>
      </div>
          </div>
          <div className="result">
            {result.map((val, i) => {
              return <><Card key = {i} props={val}/></>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
