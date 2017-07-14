import { connect } from 'react-redux';

import { increase, decrease, selectCount } from './redux';
import View from '../counter-simple/view';

const mapStateToProps = state => ({
  count: selectCount(state)
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase),
  decrease: () => dispatch(decrease)
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
