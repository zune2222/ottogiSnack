import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
const basename = "/ottogiSnack/";
const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Main} />
    </div>
  );
};

export default App;