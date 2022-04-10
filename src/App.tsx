import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import About from "./component/about/About";
import Help from "./component/help/Help";
import Welcome from "./component/welcome/Welcome";
import { ABOUT, HELP, WELCOME } from "./constants/PathConstants";
import ProtectedRoutesWithLayout from "./routes/RoutesWithLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <ProtectedRoutesWithLayout exact path={WELCOME} component={Welcome} />
          <ProtectedRoutesWithLayout path={ABOUT} component={About} />
          <ProtectedRoutesWithLayout path={HELP} component={Help} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
