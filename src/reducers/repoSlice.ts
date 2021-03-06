import { createSlice } from "@reduxjs/toolkit";
import {
  IssueState,
  IssueOrderField,
  OrderDirection,
} from "src/generated/graphql";
import { SearchParamsType } from "./types";

const DEFAULT_PAGE_SIZE = 10;

const repoSlice = createSlice({
  name: "repo",
  initialState: {
    url: "https://github.com/reactjs/reactjs.org",
    currentPage: 1,
    searchParams: {
      name: "reactjs.org",
      owner: "reactjs",
      status: IssueState.Open,
      orderBy: IssueOrderField.CreatedAt,
      orderDir: OrderDirection.Desc,
      before: undefined,
      after: undefined,
      first: DEFAULT_PAGE_SIZE,
      last: undefined,
    } as SearchParamsType,
  },
  reducers: {
    setRepo(state, action) {
      const { url, owner, name } = action.payload;
      return {
        ...state,
        url,
        searchParams: {
          ...state.searchParams,
          owner,
          name,
        },
      };
    },
    setFilter(state, action) {
      return {
        ...state,
        currentPage: 1,
        searchParams: {
          ...state.searchParams,
          before: undefined,
          after: undefined,
          last: undefined,
          first: DEFAULT_PAGE_SIZE,
          status: action.payload,
        },
      };
    },
    setCursor(state, action) {
      const { before, after } = action.payload;
      return {
        ...state,
        currentPage: after ? state.currentPage + 1 : state.currentPage - 1,
        searchParams: {
          ...state.searchParams,
          before: before || undefined,
          after: after || undefined,
          last: before ? DEFAULT_PAGE_SIZE : undefined,
          first: after ? DEFAULT_PAGE_SIZE : undefined,
        },
      };
    },
    resetParams(state) {
      return {
        ...state,
        currentPage: 1,
        searchParams: {
          ...state.searchParams,
          status: IssueState.Open,
          before: undefined,
          after: undefined,
          first: DEFAULT_PAGE_SIZE,
          last: undefined,
        },
      };
    },
  },
});

export const { setRepo, setFilter, setCursor, resetParams } = repoSlice.actions;

export default repoSlice.reducer;
