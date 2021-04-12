import React from "react";
import { headerContainer, headerImg } from "../../layout/pageStyles";
import img from "../../img/Rick_y_Morty_Title.png";

export const Header: React.FC = () => {
  return (
    <div className={ headerContainer }>
      <img src={img} className={ headerImg } />
    </div>
  );
};
