import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import pages from "shared-pages";
import { client } from "shared-api";
import { ApolloProvider } from '@apollo/react-hooks';

const App = () => (
  <ApolloProvider client={client}>  
    <Router>
      <Switch>
        {pages.map((page, index) => (
          <Route key={index} exact path={page.path} component={page.view} />
        ))}
      </Switch>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
