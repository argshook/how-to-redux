import { connect } from 'react-redux';

import { message, increase, decrease, selectCount } from './model';
import View from '../counter-simple/view';

const mapStateToProps = state => ({
  count: selectCount(state)
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(message(increase, 'increase')),
  decrease: () => dispatch(message(decrease, 'decrease'))
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
