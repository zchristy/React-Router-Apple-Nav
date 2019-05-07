import React from 'react';
import './App.css';

import { Route } from "react-router-dom";


import Nav from './Components/Nav';

import * as ROUTES from './routes.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <div style={{border: '1px solid red'}}>
        {ROUTES.mainRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.subnav}
            />
          ))}
      </div>
      {ROUTES.subRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.content}
          />
        ))}
    </div>
  );
}

export default App;
