import { connect } from 'react-redux';

import { selectCount, increase, decrease } from './redux';
import CounterSimple from './counter-simple';

const mapStateToProps = state => ({
  count: selectCount(state)
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase),
  decrease: () => dispatch(decrease)
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple);
