import React from "react";
import classes from "./Notification.module.scss";

export default (props) => {
  return (
    <div className={classes.container}>
      <div>Download will start ^_^</div>
      <div>
        <bold className={classes.bold}>{props.title || "Thla"}</bold> will start
        downloading soon
      </div>
    </div>
  );
};
