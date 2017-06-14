import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feed from '../Components/Feed';

class FeedView extends Component {
  render() {
    return (
      <div>
        <Feed />
      </div>
    );
  }
}

FeedView.propTypes = {

};

export default FeedView;