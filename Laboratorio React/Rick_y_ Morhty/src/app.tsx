import React from "react";
import { Header } from "./pods/Header/Header.component";
import { AllCharactersContainer } from "./pods/charactersList/characters.container";
import { Footer } from "./pods/footer/footer.component"

export const App = () => {
  return (
    <>
      <Header />
      <AllCharactersContainer />
      <Footer />
    </>
  );
};
