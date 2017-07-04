import { connect } from 'react-redux';

import { increase, decrease } from './redux';
import Counter from './counter';

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease())
});

export default connect(i => i, mapDispatchToProps)(Counter);
