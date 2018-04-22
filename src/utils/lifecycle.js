import React from 'react';
import { func } from 'prop-types';

const noop = () => {};

export default class extends React.PureComponent {
  static propTypes = {
    onMount: func,
    onUnmount: func
  }

  static defaultProps = {
    onMount: noop,
    onUnmount: noop
  }

  componentDidMount() {
    this.props.onMount();
  }

  componentWillUnmount() {
    this.props.onUnmount();
  }

  render() {
    return this.props.children;
  }
}
