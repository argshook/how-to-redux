import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectors, prepareHeadlines, getNext } from './redux';
import ManyHackers from './many-hackers';

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
    return ManyHackers(this.props);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped);
