import React from "react";
import { Header } from "./pods/Header/Header.component";
import { AllCharactersContainer } from "./pods/charactersList/characters.container";

export const App = () => {
  return (
    <>
      <Header />
      <AllCharactersContainer />
    </>
  );
};
