import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Authenticate from '../Components/Authenticate';

import * as userActionCreators from '../Redux/Modules/Users';


class AuthenticateView extends Component {
  constructor(props) {
    super(props);
    this.handleAuth = this.handleAuth.bind(this);
  }
  handleAuth (e) {
    e.preventDefault();
    this.props.fetchAndHandleAuthUser()
    .then(() => { this.context.router.history.replace('feed'); });
  }
  render() {
    return (
      <Authenticate
        onAuth={this.handleAuth}
        isFetching={this.props.isFetching}
        error={this.props.error} />
    );
  }
}

AuthenticateView.propTypes = {
  fetchAndHandleAuthUser: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

AuthenticateView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(
  (state) => ({isFetching: state.isFetching, error: state.error}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateView);
