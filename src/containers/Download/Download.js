import React from "react";
import classes from "./Download.module.scss";

import DownloadManager from "./DownloadManager/DownloadManager";

class Download extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.setState({ data: this.props.location.state.data });
    console.log("salam from mount");
    const data = this.props.location.state.data;
    const image = data.albumCover;
    const artist = data.artist[0];
    const title = data.title;

    // Notification.requestPermission().then(function (permission) {
    //   //console.log(this);
    //   // If the user accepts, let's create a notification
    //   if (permission === "granted") {
    //     new Notification(`Your Download is ready`, {
    //       body: `${title} by ${artist} is ready to download  `,
    //       icon: image,
    //       image: image,
    //     });
    //   }
    // });

    // console.log(this.props.location.state.data);
  }

  render() {
    console.log(this.state.data);
    return (
      <div
        style={{ backgroundColor: this.state.data.background }}
        className={classes.container}
      >
        <DownloadManager data={this.state.data} />
      </div>
    );
  }
}

export default Download;
