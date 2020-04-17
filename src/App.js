import React from "react";
import { Route } from "react-router";

// Container
import Converture from "./containers/Converture/Converture";
import Download from "./containers/Download/Download";
import Error from "./containers/Error/Error";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Converture} />
      <Route path="/sucess" component={Download} />
      <Route path="/error" component={Error} />
    </React.Fragment>
  );
}

export default App;
