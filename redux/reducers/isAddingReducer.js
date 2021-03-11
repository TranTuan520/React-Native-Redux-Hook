const isAddingReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_ADDING') return !state;
    return state;
  };
export default isAddingReducer  