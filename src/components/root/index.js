import { connect } from 'react-redux';

import { message, selectors, switchTab } from './logic';

import Root from './view';

const mapStateToProps = state => ({
  activeTab: selectors.activeTab(state)
});

const mapDispatchToProps = dispatch => ({
  switchTab: id => () => dispatch(message(switchTab(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
