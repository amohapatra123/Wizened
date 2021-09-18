import React, {Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./Routes/Route";
import './App.css';

function App() {
   const routcomponent = routes.map(({ path, component, id }) => (
    <Route exact path={path} component={component} key={id} />
  ));
  return (
    <>
        <Suspense fallback={<></>}>
        <Router>
          <Switch>{routcomponent}</Switch>
        </Router>
        </Suspense>
    </>
  );
}

export default App;
