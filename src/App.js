import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import firebaseInit from "./firebaseInit";
import Detail from "./Detail";
const basename = "/ottogiSnack/";
const App = () => {
  return (
    <>
      <Route path="/" exact={true} component={Main} />
      <Route path="/menu/:id" component={Detail} />
    </>
  );
};

export default App;
