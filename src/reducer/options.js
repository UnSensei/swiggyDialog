const { ADD_OPTION, REMOVE_OPTION, FINAL_LIST } = require("../constants/types");

const initialState = [];

export const options = (state = [], action) => {
  switch (action.type) {
    case ADD_OPTION:
      return [...state, action.id];
    case REMOVE_OPTION:
      return state.filter((item) => item !== action.id);
    default:
      return state;
  }
};
export const finalList = (state = [], action) => {
  switch (action.type) {
    case FINAL_LIST:
      return (state = []), [...state, action.data];

    default:
      return state;
  }
};
