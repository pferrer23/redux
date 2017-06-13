import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FacebookAuthButton extends Component {
  render() {
    return (
      <button onClick={this.props.onAuth} className="button">
        {this.props.isFetching === true
          ? 'Loading'
          : 'Login with facebook'}
      </button>
    );
  }
}

FacebookAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default FacebookAuthButton;