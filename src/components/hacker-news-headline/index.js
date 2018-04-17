import React, { Component } from 'react';
import { connect } from 'react-redux';

import { prepareHeadline, selectors } from './logic';
import View from './view';

const mapStateToProps = state => ({
  isLoading: selectors.isLoading(state),
  title: selectors.title(state),
  url: selectors.url(state)
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(prepareHeadline)
});

class Wrapped extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return this.props.isLoading ?
      <div>Loading...</div> :
      View(this.props);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped);
