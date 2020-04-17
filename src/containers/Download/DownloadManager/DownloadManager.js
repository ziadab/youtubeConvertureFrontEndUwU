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
        classes.fadeIn,
        classes["delay-1s"],
      ].join(" ")}
    >
      <div
        style={{ backgroundImage: `url("${props.data.albumCover}")` }}
        className={[
          classes.imageContainer,
          classes.animated,
          classes.fadeIn,
          classes["delay-2s"],
        ].join(" ")}
      ></div>
      <div className={classes.dataBackground}>
        <div className={classes.data}>
          <div
            className={[
              classes.title,
              classes.animated,
              classes.fadeInLeft,
              classes["delay-2s"],
            ].join(" ")}
          >
            {props.data.title}
          </div>
          <div
            className={[
              classes.artist,
              classes.animated,
              classes.fadeInLeft,
              classes["delay-2s"],
            ].join(" ")}
          >
            By: {props.data.mainArtist}
          </div>
          <a
            className={[classes.download].join(" ")}
            href={props.data.downloadLink}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
