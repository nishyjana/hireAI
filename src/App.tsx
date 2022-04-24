import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import About from "./component/about/About";
import Login from "./component/auth/Login";
import SignUp from "./component/auth/SignUp";
import Help from "./component/help/Help";
import Welcome from "./component/welcome/Welcome";
import {
  ABOUT,
  HELP,
  SIGNIN,
  SIGNUP,
  WELCOME,
} from "./constants/PathConstants";
import ProtectedRoutesWithLayout from "./routes/RoutesWithLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <ProtectedRoutesWithLayout exact path={WELCOME} component={Welcome} />
          <ProtectedRoutesWithLayout path={SIGNUP} component={SignUp} />
          <ProtectedRoutesWithLayout path={SIGNIN} component={Login} />
          <ProtectedRoutesWithLayout path={ABOUT} component={About} />
          <ProtectedRoutesWithLayout path={HELP} component={Help} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
