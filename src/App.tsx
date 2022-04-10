import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import About from "./component/about/About";
import Welcome from "./component/welcome/Welcome";
import ProtectedRoutesWithLayout from "./routes/RoutesWithLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <ProtectedRoutesWithLayout exact path="/" component={Welcome} />
          <ProtectedRoutesWithLayout path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
