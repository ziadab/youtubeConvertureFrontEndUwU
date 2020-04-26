import React from "react";
import classes from "./Download.module.scss";
import DownloadManager from "./DownloadManager/DownloadManager";

// Notification inside page uwu
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import Notification from "../../components/Notification/Notification";
import "./animate.css";

import "react-notifications-component/dist/theme.css";

class Download extends React.Component {
  state = {
    data: {},
  };

  downloadHandler = () => {
    store.addNotification({
      content: <Notification title={this.state.data.title} />,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeInRight"],
      animationOut: ["animated", "fadeOutRight"],
      dismiss: {
        duration: 2000,
        showIcon: true,
      },
    });

    window.location.replace(this.state.data.downloadLink);
  };

  componentDidMount() {
    this.setState({ data: this.props.location.state.data });
    // console.log("salam from mount");
    // const data = this.props.location.state.data;
    // const image = data.albumCover;
    // const artist = data.artist[0];
    // const title = data.title;

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
        <ReactNotification />
        <DownloadManager
          downloadHandler={this.downloadHandler}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Download;
