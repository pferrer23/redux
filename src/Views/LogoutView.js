import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logout from '../Components/Logout';

class LogoutView extends Component {
  render() {
    return (
      <div>
        <Logout />
      </div>
    );
  }
}

LogoutView.propTypes = {

};

export default LogoutView;