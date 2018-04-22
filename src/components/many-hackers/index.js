import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectors, prepareHeadlines, getNext } from './logic';
import view from './view';

const mapStateToProps = state => ({
  isLoading: selectors.isLoading(state),
  headlines: selectors.headlines(state)
});

const mapDispatchToProps = dispatch => ({
  loadInitial: () => dispatch(prepareHeadlines),
  loadMore: () => dispatch(getNext)
});

class Wrapped extends Component {
  componentDidMount() {
    this.props.loadInitial();
  }

  render() {
    return view(this.props);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped);
