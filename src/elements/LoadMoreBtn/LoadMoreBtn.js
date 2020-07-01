import React from "react";
import "./LoadMoreBtn.css";
import { Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

const LoadMoreBtn = props => {
  return (
    // <div className="rmdb-loadmorebtn" onClick={props.onClick}>
    //   <p>{props.text}</p>
    // </div>
    <div className="LoadMoreBtn">
      <Button variant="outlined"  onClick={props.onClick} className="btnTrailer"><FontAwesome className="fa-chevron-circle-down" name="loadmore"/>&nbsp; Load More </Button>
    </div>
  );
};

export default LoadMoreBtn;
