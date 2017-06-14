import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './App.css';
import Home from './Views/HomeView';
import Navigation from './Components/Navigation';
import Authenticate from './Views/AuthenticateView';
import FeedView from './Views/FeedView';
import LogoutView from './Views/LogoutView';
import checkIfAuthed from './Utils/Auth';
import * as userActionCreators from './Redux/Modules/Users';
import { formatUserInfo } from './Utils/Utils';
import { firebaseAuth } from './Config/Constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (rest.isFetching) {
    return (<div>Loading...</div>)
  }
  return (
    <Route { ...rest } render={
      (props) => {
        if(props.location.pathname === '/' || props.location.pathname === '/auth') {
          if (rest.isAuthed) {
            return (<Redirect to={{
              pathname: '/feed',
              state: { from: props.location }
            }}/>)
          }
          else {
            return (<Component { ...props } {...rest} />)
          }
        }
        else {
          if (rest.isAuthed) {
            return (<Component { ...props } {...rest} />)
          }
          else {
            return (<Redirect to={{
              pathname: '/auth',
              state: { from: props.location }
            }}/>)
          }
        }
      }
    }/>
  )
};

class App extends Component {
  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user)=>{
      if (user) {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid);
        this.props.authUser(user.uid);
        this.props.fetchingUserSuccess(user.uid,userInfo, Date.now());
      }
    })
  }
  
  render() {
    return (
      <Router>
        <div className='App'>
          <Navigation isAuthed={this.props.isAuthed}/>
          <Switch>
            <PrivateRoute exact path="/" component={Home} isAuthed={this.props.isAuthed} isFetching={this.props.isFetching} />
            <PrivateRoute path='/feed' component={ FeedView } isAuthed={this.props.isAuthed} isFetching={this.props.isFetching}/>

            <PrivateRoute path="/auth" component={Authenticate} isAuthed={this.props.isAuthed} isFetching={this.props.isFetching} />
            <Route path='/logout' component={LogoutView} />
            <Route render={function () {
              return <p>NOT FOUND!</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  authUser: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
};


export default connect(
  (state) => ({isAuthed: state.isAuthed, isFetching: state.isFetching}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(App);
