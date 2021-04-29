import { createSlice } from "@reduxjs/toolkit";
import {
  IssueState,
  // IssueOrderField,
  // OrderDirection,
} from "src/generated/graphql";

const repoSlice = createSlice({
  name: "repo",
  initialState: {
    url: "https://github.com/reactjs/reactjs.org",
    name: "reactjs.org",
    owner: "reactjs",
    filter: IssueState.Open,
  },
  reducers: {
    setRepo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { setRepo, setFilter } = repoSlice.actions;

export default repoSlice.reducer;
