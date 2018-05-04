import { connect } from 'react-redux';

import {
  selector,
  addComponent,
  componentAction,
  removeComponent,
  loadHeadline
} from './logic';

import { increase, decrease } from '../counter-messages/logic';

import view from './view';

const mapStateToProps = state => ({
  components: selector.components(state),
  isLoading: selector.isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  increaseCounter: id => () => dispatch(componentAction(increase)(id)),
  decreaseCounter: id => () => dispatch(componentAction(decrease)(id)),
  addComponent: type => model => () => dispatch(addComponent(type)(model)),
  removeComponent: id => () => dispatch(removeComponent(id)),
  loadHeadline: id => () => dispatch(loadHeadline(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(view);
