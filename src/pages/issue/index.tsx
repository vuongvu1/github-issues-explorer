import { useIssueQuery, IssueState } from "src/generated/graphql";
import SC from "./styles";

const Error = () => {
  const { data, loading, error } = useIssueQuery({
    variables: {
      name: "reactjs.org",
      owner: "reactjs",
      status: IssueState.Open,
    },
  });

  console.log({ data, loading, error });

  return <SC.Wrapper>Issue</SC.Wrapper>;
};

export default Error;
