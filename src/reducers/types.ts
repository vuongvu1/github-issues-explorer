import {
  IssueState,
  IssueOrderField,
  OrderDirection,
} from "src/generated/graphql";
import rootReducer from ".";

export type RootState = ReturnType<typeof rootReducer>;

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

export type AuthorType = {
  avatarUrl: string;
  login: string;
};

export type CommentType = {
  body: string;
  createdAt: string;
  author: AuthorType;
};
