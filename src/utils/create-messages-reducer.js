export default stateName => initialState => (state = initialState, action) =>
  action.type === 'MESSAGE' && action.stateName === stateName ?
    action.message(state) :
    state;
