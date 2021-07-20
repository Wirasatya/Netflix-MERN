import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import MovieEdit from "./pages/movieEdit/MovieEdit";
import MovieList from "./pages/movieList/MovieList";
import MovieNew from "./pages/movieNew/MovieNew";
import UserEdit from "./pages/userEdit/UserEdit";
import UserList from "./pages/userList/UserList";
import UserNew from "./pages/userNew/UserNew";
import ListEdit from "./pages/listEdit/ListEdit";
import ListList from "./pages/listList/ListList";
import ListNew from "./pages/listNew/ListNew";
import "./app.scss";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import Login from "./pages/login/Login";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      {user && <Topbar></Topbar>}
      <div className="container">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            {user ? <Home></Home> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route exact path="/login">
            {!user ? <Login></Login> : <Redirect to="/"></Redirect>}
          </Route>
          <Route path="/movieEdit/:id">
            {user ? <MovieEdit></MovieEdit> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/movieList">
            {user ? <MovieList></MovieList> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/movieNew">
            {user ? <MovieNew></MovieNew> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/userEdit">
            {user ? <UserEdit></UserEdit> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/userList">
            {user ? <UserList></UserList> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/userNew">
            {user ? <UserNew></UserNew> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/listEdit/:id">
            {user ? <ListEdit></ListEdit> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/listList">
            {user ? <ListList></ListList> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/listNew">
            {user ? <ListNew></ListNew> : <Redirect to="/login"></Redirect>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
