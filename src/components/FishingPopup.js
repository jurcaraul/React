
import React from "react";

export default function FishingPopup(props) {
    
  return (props.trigger) ? (
    <div>
      <h1>popup</h1>
      {props.children}
    </div>
  ) : " ";
}
