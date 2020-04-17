import React from "react";
import classes from "./Button.module.scss";

export default (props) => {
  return (
    <button className={classes.Button} onClick={props.onClick}>
      {props.children || "Put a fking text"}
    </button>
  );
};
