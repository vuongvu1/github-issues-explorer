import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
  name: "repo",
  initialState: {
    url: "https://github.com/reactjs/reactjs.org",
    name: "reactjs.org",
    owner: "reactjs",
  },
  reducers: {
    setRepo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setRepo } = repoSlice.actions;

export default repoSlice.reducer;
