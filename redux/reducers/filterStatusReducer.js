const filterStatusReducer = (state = 'SHOW_ALL', action) => {
    if (action.type == 'FILTER_SHOW_ALL') return 'SHOW_ALL';
    if (action.type == 'FILTER_MEMORIZED') return 'MEMORIZED';
    if (action.type == 'FILTER_NEED_PRACTICE') return 'NEED_PRACTICE';
    return state;
};
  
export default filterStatusReducer