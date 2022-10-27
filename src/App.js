import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import New from "./New";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      {/* <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router> */}
      <Main />
    </div>
  );
}

export default App;
