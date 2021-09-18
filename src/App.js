import React, {Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./Routes/Route";
import './App.css';
import { initializeApp } from "firebase/app";
const config = {
  apiKey: "AIzaSyC_dgJSHFeEI4gFcYLt3ysUXnTXMUbn0M4",
  authDomain: "wizened-c6676.firebaseapp.com",
  projectId: "wizened-c6676",
  storageBucket: "wizened-c6676.appspot.com",
  messagingSenderId: "381453581774",
  appId: "1:381453581774:web:7d1bcf1af65da20a6dbf9f",
  measurementId: "G-Q3D0ZET22C"
};
initializeApp(config);
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
