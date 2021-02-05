import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MycontentProvider } from "./myContext";
import { LoginContainer } from "./pods/login/login.container";
import { DetailContainer } from "./pods/detailMember/detail.container";
import { ListContainer } from "./pods/list/list.container";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginContainer />
        </Route>
        <MycontentProvider>
          <Route path="/list">
            <ListContainer />
          </Route>
          <Route path="/detail/:id">
            <DetailContainer />
          </Route>
        </MycontentProvider>
      </Switch>
    </Router>
  );
};
