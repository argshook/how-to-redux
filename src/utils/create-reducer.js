export default initialState =>
  (derivations = {}) =>
    (state = initialState, action) =>
      (derivations[action.type] || (() => state))(state, action);
