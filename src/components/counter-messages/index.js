import { connect } from 'react-redux';

import { message, selectCount } from './redux';
import CounterMessages from './counter-messages';

const mapStateToProps = state => ({
  count: selectCount(state)
});

const mapDispatchToProps = dispatch => ({
  increase: () =>
    dispatch(message(state =>
      ({ ...state, count: state.count + 1 })
    )),

  decrease: () =>
    dispatch(message(state =>
      ({ ...state, count: state.count - 1 })))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterMessages);
