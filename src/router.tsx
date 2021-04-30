import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ErrorPage from "src/pages/error";
import IssuePage from "src/pages/issue";
import DetailPage from "src/pages/detail";
import { Header } from "src/components/index";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={IssuePage} />
        <Route path="/issue/:id" exact component={DetailPage} />
        <Route path="/404" component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
