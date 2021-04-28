import { useIssueQuery, IssueState } from "src/generated/graphql";

function App() {
  const { data, loading, error } = useIssueQuery({
    variables: {
      name: "reactjs.org",
      owner: "reactjs",
      status: IssueState.Open,
    },
  });

  console.log({ data, loading, error });

  return (
    <div>
      <header></header>
    </div>
  );
}

export default App;
