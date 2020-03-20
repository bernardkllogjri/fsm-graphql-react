import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import pages from "shared-pages";

const App = () => (
  <Router>
    <Switch>
      {pages.map((page, index) => (
        <Route key={index} exact path={page.path} component={page.view} />
      ))}
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
