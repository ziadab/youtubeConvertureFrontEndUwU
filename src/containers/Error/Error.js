import React from "react";
import classes from "./Error.module.scss";
import ErrorButton from "./ErrorButton/ErrorButton";

class Error extends React.Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }

  notifyUseBad = () => {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        new Notification("Hi there!", {
          body: "Something go baaad :'(",
          icon:
            "http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png",
        });
      }
    });
  };

  render() {
    this.notifyUseBad();
    return (
      <div>
        <div className={classes.flexy}>
          {/* Header Section  */}
          <div className={classes.text}>
            Something go wrong{" "}
            <span role="img" aria-label="😥">
              😥
            </span>
          </div>
          {/* Animation  */}
          <div className={classes.container}>
            <h1 className={classes.number}>4</h1>
            <h1 className={classes.number}>0</h1>
            <h1 className={classes.number}>4</h1>
          </div>
          {/* Button Section  */}
          <div className={classes.btnSection}>
            <ErrorButton>THLA</ErrorButton>
            <ErrorButton>BOSSA</ErrorButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
