import { combineReducers } from "redux";

// Import Reducers Here.
import pageReducer from './currentPageReducer';

const reducer = combineReducers({
  // Add Reducers Here
  pageInfo: pageReducer
})

export default reducer