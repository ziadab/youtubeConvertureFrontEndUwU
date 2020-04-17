import React from "react";
import classes from "./ErrorButton.module.scss";

export default (props) => {
  return <button className={classes.btn}>{props.children}</button>;
};
