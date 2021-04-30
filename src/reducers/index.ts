import { combineReducers } from "redux";
import repoSlice from "./repoSlice";

const rootReducer = combineReducers({
  repoSlice,
});

export default rootReducer;
