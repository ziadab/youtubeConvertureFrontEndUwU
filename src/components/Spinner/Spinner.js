import React from "react";
import classes from "./Spinner.module.scss";

class Spinner extends React.Component {
  state = {
    show: false,
  };

  

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.show !== this.state.show) {
      return true;
    } else {
      return false;
    }
  }

  showText = () => {
    setTimeout(() => {
      this.setState({ show: true });
    }, 5000);
  };

  render() {
    this.showText();
    return (
      <div className={classes.container}>
        {console.log(this.state.show)}
        {this.state.show ? (
          <div
            className={[
              classes.text,
              classes.animated,
              classes.fadeInDown,
              classes["delay-1s"],
            ].join(" ")}
          >
            It may Take a while...
          </div>
        ) : null}
        <svg
          className={classes.spinner}
          width="65px"
          height="65px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={classes.path}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    );
  }
}

export default Spinner;
