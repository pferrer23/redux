import React, { Component } from 'react';
import Authenticate from '../Components/Authenticate';
import Auth from '../Utils/Auth';

class componentName extends Component {
  handleAuth () {
    Auth().then((user) => {
      console.log(user)
    })
  }
  render() {
    return (
      <Authenticate
        onAuth={this.handleAuth}
        isFetching={false}
        error={''} />
    );
  }
}

export default componentName;