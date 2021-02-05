import React from "react";
import img from "../../img/Rick_y_Morty_Title.png";

export const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: "teal", display: "flex" }}>
      <img
        src={img}
        style={{ height: 200, marginLeft: "auto", marginRight: "auto" }}
      ></img>
    </div>
  );
};
