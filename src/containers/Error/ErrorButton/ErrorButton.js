import React from "react";
import classes from "./ErrorButton.module.scss";

export default (props) => {
  return (
    <button
      onClick={props.onClick}
      className={[classes.btn].join(" ")}
      className={
        props.className
          ? [classes.btn, ...props.className].join(" ")
          : classes.btn
      }
    >
      {props.children}
    </button>
  );
};
