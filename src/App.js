import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/HomeView';
import Navigation from './Components/Navigation';
import Authenticate from './Views/AuthenticateView';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navigation isAuthed={false}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Authenticate} />
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
