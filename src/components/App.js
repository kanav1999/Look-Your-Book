import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Bookapi from './Bookapi';
import Login from "./Login";
import style from "./style.css";
function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/bookapi" component={Bookapi} />
            <Route path="/" component={Login} />
            <Route path="/" component={style} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
