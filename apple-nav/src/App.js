import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';

import Nav from './Components/Nav';
import * as ROUTES from './routes.js';

const AppContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Nav />
      <div>
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
    </AppContainer>
  );
}

export default App;
