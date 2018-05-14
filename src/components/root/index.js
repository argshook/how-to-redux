import { connect } from 'react-redux';

import { message, selector } from './model';

import Root from './view';

const mapStateToProps = state => ({
  activeTab: selector.activeTab(state)
});

const mapDispatchToProps = dispatch => ({
  switchTab: activeTab => () => dispatch(message({ activeTab }, 'switchTab'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
