import { connect } from 'react-redux';

import {
  selectors,
  addComponent,
  componentAction,
  removeComponent,
  loadHeadline
} from './logic';

import { increase, decrease } from '../counter-messages/logic';

import view from './view';

const mapStateToProps = state => ({
  components: selectors.components(state)
});

const mapDispatchToProps = dispatch => ({
  increaseCounter: id => () => dispatch(componentAction(increase)(id)),
  decreaseCounter: id => () => dispatch(componentAction(decrease)(id)),
  addComponent: type => model => () => dispatch(addComponent(type)(model)),
  removeComponent: id => () => dispatch(removeComponent(id)),
  loadHeadline: id => () => dispatch(loadHeadline(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(view);
