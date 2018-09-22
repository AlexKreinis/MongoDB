import React, { Component } from 'react';
import FormG from './FormG';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import table from './table';
import submissionPage from './submissionPage';
import submitPage from './submitPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={table} />
            <Route exact path="/form" component={FormG} />
            <Route
              exact
              path="/submissionPage/:id"
              component={submissionPage}
            />
            <Route exact path="/submitPage/:id" component={submitPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
