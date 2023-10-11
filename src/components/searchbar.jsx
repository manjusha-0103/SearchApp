import React, { useState } from "react";
import "./style/searchbar.css";
import Search from "./../images/home/Search.svg";
import { InfoBox } from "./OutsideClick";
import Suggest from "./suggest";
import SearchResult from "./searchResult";
import data from "./cads";



const Searchbar = () => {
  const [onclick, setClick] = useState(false);
  const [istrend, setTrend] = useState(false);
  const [onchange, setChange] = useState(false);
  const [searchItem, setItem] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [resultClick, setResult] = useState(false);

  const handleSuggets = () => {
    setClick(!onclick);
    setTrend(!istrend);
    //setChange(true);
  };
  const handleResult = (e) => {
    
    console.log(onchange);
    const query = e.target.value;
    setItem(query);
    if (query.length > 0) {
      setSearchResults(
        data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setSearchResults([]);
    }
    setTrend(false);
    setChange(true);
  };

  const handleSearchClick = (e) => {
        try{
            
            setSearchResults(
            data.filter((item) =>
                item.title.toLowerCase().includes(searchItem.toLowerCase())
            )
            );
            setResult(true);
            setChange(false);
        }
        catch(e){
            console.log(e)
        }
    
  };

  return (
    <>
      <div className="box">
        <input
          type="text"
          placeholder="Search"
          value={searchItem}
          onClick={handleSuggets}
          onChange={handleResult}
        />

        <button
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            cursor :'pointer'
          }}
          onClick={handleSearchClick}
          onKeyDown={(e)=>{handleSearchClick(e)} }
        >
          <img
            style={{
              width: "4rem",
              height: "2rem",
            }}
            src={Search}
            alt=""
          />
        </button>
      </div>
     
      {onclick ? (
        <>
          {istrend ? (
            <Suggest />
          ) : (
            <>
              {onchange ? (
                <SearchResult props={searchResults} />
              ) : (
                <>
                  {resultClick ? (
                    <>
                      <SearchResult props={searchResults} />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Searchbar;
