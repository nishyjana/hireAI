import React from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Welcome from "./component/Welcome";
import RoutesWithLayout from "./routes/RoutesWithLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route path="/" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
