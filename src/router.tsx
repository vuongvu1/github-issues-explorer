import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ErrorPage from "src/pages/error";
import IssuePage from "src/pages/issue";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IssuePage} />
        <Route path="/404" component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
