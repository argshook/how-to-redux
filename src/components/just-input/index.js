import { connect } from 'react-redux';

import view from './view';
import { select, changeValue } from './logic';

const mapStateToProps = state => ({
  value: select.value(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { value } }) => dispatch(changeValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(view);
