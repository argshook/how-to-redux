import { connect } from 'react-redux';

import { increase, decrease } from './redux';
import CounterSimple from './counter-simple';

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase),
  decrease: () => dispatch(decrease)
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple);
