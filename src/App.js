import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route render={function () {
              return <p>NOT FOUND!</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
