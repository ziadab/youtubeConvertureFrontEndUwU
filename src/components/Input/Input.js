  import React from "react";
  import classes from "./Input.module.scss";

  // It may help me later
  // https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key

  export default (props) => {
    return (
      <input
        className={classes.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        value={props.value}
      />
    );
  };
