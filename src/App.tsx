import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Welcome from "./component/welcome/Welcome";
import ProtectedRoutesWithLayout from "./routes/RoutesWithLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <ProtectedRoutesWithLayout path="/" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
