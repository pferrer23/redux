import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Authenticate from '../Components/Authenticate';
import Auth from '../Utils/Auth';
import * as userActionCreators from '../Redux/Modules/Users';


class AuthenticateView extends Component {
  constructor(props) {
    super(props);
    this.handleAuth = this.handleAuth.bind(this);
  }
  handleAuth () {
    this.props.fetchingUser()
    Auth().then((user) => {
      this.props.fetchingUserSuccess(user.uid, user, Date.now())
      this.props.authUser(user.uid)
    })
    .catch((error) => this.props.fetchingUserFailure(error))
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
  fetchingUser: PropTypes.func.isRequired,
  fetchingUserFailure: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};


export default connect(
  (state) => ({isFetching: state.isFetching, error: state.error}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateView);