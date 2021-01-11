import React from "react";
import ReactDOM from "react-dom";
import { LogoComponent } from "./logo";

ReactDOM.render(
  <div>
    <h1 className="red-background">¡¡Hola Mundo desde React DOM!!</h1>
    <LogoComponent />
  </div>,
  document.getElementById("root")
);