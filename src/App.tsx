import logo from "./logo.svg";
import "./App.css";
import { useIssueQuery, IssueState } from "./generated/graphql";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
