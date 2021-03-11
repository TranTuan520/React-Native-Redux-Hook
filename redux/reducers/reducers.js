import {combineReducers} from 'redux';
import arrWordsReducer from './arrWordReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';
const reducer = combineReducers({
  arrWords: arrWordsReducer,
  filterStatus: filterStatusReducer,
  isAdding: isAddingReducer,
});

export default reducer;
