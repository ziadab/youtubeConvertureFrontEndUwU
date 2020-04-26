import React from "react";
import classes from "./DownloadManager.module.scss";

class DownloadManager extends React.Component {
  render() {
    if (!this.props.data) {
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
          style={{ backgroundImage: `url("${this.props.data.albumCover}")` }}
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
              {this.props.data.title}
            </div>
            <div
              className={[
                classes.artist,
                classes.animated,
                classes.fadeInLeft,
                classes["delay-2s"],
              ].join(" ")}
            >
              By: {this.props.data.mainArtist}
            </div>
            <button
              className={[classes.download].join(" ")}
              onClick={this.props.downloadHandler}
              //href={props.data.downloadLink}
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadManager;
