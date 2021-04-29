import { combineReducers } from "redux";
import repoSlice from "./repoSlice";

const rootReducer = combineReducers({
  repoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
