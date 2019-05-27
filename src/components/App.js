import React, { Component } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';

import News from "./News";
import SingleNews from "./SingleNews";
import CardForm from "./CardForm";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={News} path={'/'} />
        <Route exact component={SingleNews} path={'/news/:id'} />
        <Route exact component={CardForm} path={'/payment'} />
        <Route exact component={Login} path={'/login'} />
      </Switch>
    );
  }
}

export default withRouter(App);
