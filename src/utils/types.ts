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
