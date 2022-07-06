import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { BiPhone, BiWorld } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const PopupBox = (props) => {
  return (
    <div className="popup-box">
      <h2>{props.title}</h2>
      <div className="pop-container">
        <div className="icon-box">
          <AiTwotoneStar size={18} />
          <HiLocationMarker size={18} />
          <FiClock size={18} />
          <BiWorld size={18} />
          <BiPhone size={18} />
        </div>
        <div className="instruction-box">
          <span>{props.review}</span>
          <span>{props.address}</span>
          <span>{props.hours}</span>
          <span>{props.web}</span>
          <span>{props.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
