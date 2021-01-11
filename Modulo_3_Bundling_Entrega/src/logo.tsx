import React from "react";

export const LogoComponent = () => {
  const text: string = "Entrega Módulo 3 - Bundling"
  return (
    <div>
      <img src="../src/img/logo_2.png"/>
      <h3>{ text }</h3>
    </div>
  );
};