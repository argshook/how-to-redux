import React, { Component } from 'react';
import { connect } from 'react-redux';

import Lifecycle from '../../utils/lifecycle';
import { prepareHeadline, selector } from './logic';
import view from './view';

const mapStateToProps = state => ({
  isLoading: selector.isLoading(state),
  title: selector.title(state),
  url: selector.url(state)
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(prepareHeadline)
});

const Wrapped = props =>
  <Lifecycle onMount={props.onLoad}>
    { props.isLoading
      ? <div>Loading...</div>
      : view(props)
    }
  </Lifecycle>;

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped);
