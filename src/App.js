import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/common.css';

import MainLayout from './layouts/MainLayout';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          
          <Route path="/main" component={MainLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
