import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutAndUnauth } from '../Redux/Modules/Users';

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch(logoutAndUnauth());
  }
  
  render() {
    return (
      <div className="slogan">
        You are now logged out
      </div>
    );
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Logout);