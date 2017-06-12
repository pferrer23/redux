import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Navigation from './Components/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navigation isAuthed={true}/>
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
