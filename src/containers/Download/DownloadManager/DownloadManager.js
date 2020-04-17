import React from "react";
import classes from "./DownloadManager.module.scss";

export default (props) => {
  if (!props.data) {
    return null;
  }
  return (
    <div
      className={[
        classes.box,
        classes.animated,
        classes.slideInDown,
        classes["delay-1s"],
      ].join(" ")}
    >
      <div
        style={{ backgroundImage: `url("${props.data.albumCover}")` }}
        className={classes.imageContainer}
      ></div>
      <div className={classes.dataBackground}>
        <div className={classes.data}>
          <div className={classes.title}>{props.data.title}</div>
          {console.log(props.data.artist)}
          <div>By: {props.data.mainArtist}</div>
        </div>
      </div>
    </div>
  );
};
