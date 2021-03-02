import React from "react";
import * as classes from "./centered.layout.styless";

export const CentredLayaout: React.FunctionComponent = props => {
  const { children } = props;
  return <div className={classes.centeredDiv}>{children}</div>;
};
