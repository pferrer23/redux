import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookAuthButton from './FacebookAuthButton'
import Auth from "../Utils/Auth";

class Authenticate extends Component {
  handleAuth () {
    Auth().then((user) => {
      console.log('Authed User ', user);
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Authenticate</h1>
        <FacebookAuthButton isFetching={this.props.isFetching} onAuth={this.props.onAuth} />
        {this.props.error ? <p className="errorMsg">{this.props.error}</p> : null}
      </div>
    );
  }
}

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
};

export default Authenticate;
