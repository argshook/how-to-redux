import { connect } from 'react-redux';

import { message, selector } from './logic';

import Root from './view';

const mapStateToProps = state => ({
  activeTab: selector.activeTab(state)
});

const mapDispatchToProps = dispatch => ({
  switchTab: activeTab => () => dispatch(message({ activeTab }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
