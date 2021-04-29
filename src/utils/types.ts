export type IssueType = Array<{
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
}>;
