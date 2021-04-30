import { createSlice } from "@reduxjs/toolkit";
import {
  IssueState,
  IssueOrderField,
  OrderDirection,
} from "src/generated/graphql";

const DEFAULT_PAGE_SIZE = 10;

export type SearchParamsType = {
  name: string;
  owner: string;
  status: IssueState;
  orderBy: IssueOrderField;
  orderDir: OrderDirection;
  before?: string;
  after?: string;
  first?: number;
  last?: number;
};

export type IssueType = {
  id: string;
  title: string;
  number: number;
  createdAt: string;
  author: {
    login: string;
  };
  comments: {
    totalCount: number;
  };
};

const repoSlice = createSlice({
  name: "repo",
  initialState: {
    url: "https://github.com/reactjs/reactjs.org",
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
        searchParams: {
          ...state.searchParams,
          before: before || undefined,
          after: after || undefined,
          last: before ? DEFAULT_PAGE_SIZE : undefined,
          first: after ? DEFAULT_PAGE_SIZE : undefined,
        },
      };
    },
  },
});

export const { setRepo, setFilter, setCursor } = repoSlice.actions;

export default repoSlice.reducer;
