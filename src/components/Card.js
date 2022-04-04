import React from "react";
// import Img1 from "./apus.png";
import star from "./stars.png";
import FishingPopup from "./FishingPopup";

export default function Card(props) {
  let badgeText
  if(props.openSpots===0){
    badgeText = "SOLD OUT"
  }else if(props .location === "Online"){
    badgeText = "ONLINE"
  }
  
  return (
    <div className="card-el">
      {/* {badgeText && <div className="cards-badge">{badgeText}</div>} */}
      <img className="card-img" src={props.img} />
      <div className="card-stats">
        {/* <img src={star} /> */}
        {/* <span> {props.nota} </span> */}
        {/* <span> (6) </span> */}
        {/* <span> {props.stock} </span> */}
      </div>
      <p className="card-product">{props.product}</p>
      <p>
        {" "}
        {/* <span className="bold">From {props.price}$</span> / Room */}
        <button className="details-btn btn btn-outline-dark" onClick={()=>props.setPopup(true)}>Details</button>
      </p>
    </div>
  );
}
