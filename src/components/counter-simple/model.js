export const NAME = 'counter-simple';

export const MODEL = {
  count: 0
};

// actions types
export const INCREASE = `${NAME}/INCREASE`;
export const DECREASE = `${NAME}/DECREASE`;

// actions
export const increase = { type: INCREASE };
export const decrease = { type: DECREASE };
// you could also write as a functions though not really necessary in this case:
// export const increase = () => ({ type: INCREASE });

export const reducer = (state = MODEL, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };

    case DECREASE:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export const selectCount = state => state[NAME].count;
