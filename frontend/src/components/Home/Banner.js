import React from "react";
import logo from "../../imgs/logo.png";
import SearchBar from "./SearchBar";

const Banner = (props) => {
  let shouldHideSearchBox =
    props.isGetPartClicked === null ||
    props.isGetPartClicked === undefined ||
    props.isGetPartClicked === false;

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part" onClick={props.onGetPartClicked}>
            A place to get
          </span>
          <SearchBar
            shouldHideSearchBox={shouldHideSearchBox}
            onSearchBoxUpdate={props.onSearchBoxUpdate}
          ></SearchBar>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
