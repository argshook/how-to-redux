import { connect } from 'react-redux';

import { selectCount, increase, decrease } from './model';
import View from './view';

const mapStateToProps = state => ({
  count: selectCount(state)
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase),
  decrease: () => dispatch(decrease)
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
