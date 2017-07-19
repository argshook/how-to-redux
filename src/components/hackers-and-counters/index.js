import { connect } from 'react-redux';

import {
  selectors,
  addCounter,
  counterAction,
  removeCounter
} from './redux';

import { getNext, selectors as manyHackersSelectors } from '../many-hackers/redux';
import { increase, decrease } from '../counter-messages/redux';

import HackersAndCounters from './view';

const mapStateToProps = state => ({
  counters: selectors.counters(state),
  headlines: manyHackersSelectors.headlines(state)
});

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter()),
  increaseCounter: id => () => dispatch(counterAction(increase)(id)),
  decreaseCounter: id => () => dispatch(counterAction(decrease)(id)),
  removeCounter: id => () => dispatch(removeCounter(id)),
  addHeadline: () => dispatch(getNext)
});

export default connect(mapStateToProps, mapDispatchToProps)(HackersAndCounters);
