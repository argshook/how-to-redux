const message = stateName => message =>
  ({ type: 'MESSAGE', stateName, message });

export default stateName =>
  message(stateName);
