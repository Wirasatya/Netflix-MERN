import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useStateGlobal } from "./context/StateProvider";

const App = () => {
  const [{ user }] = useStateGlobal();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/movies">
          {!user ? <Login /> : <Home type="movie" />}
        </Route>
        <Route path="/series">
          {!user ? <Login /> : <Home type="series" />}
        </Route>
        <Route path="/watch">{!user ? <Login /> : <Watch />}</Route>
      </Switch>
    </Router>
  );
};

export default App;
