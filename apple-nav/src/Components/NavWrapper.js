import React from 'react';

import { Route } from "react-router-dom";

import Nav from './Nav';
import Mac from './SubNavComponents/Mac';
import Ipad from './SubNavComponents/Ipad';
import Iphone from './SubNavComponents/Iphone';
import Watch from './SubNavComponents/Watch';
import Tv from './SubNavComponents/Tv';
import Support from './SubNavComponents/Support';
import Search from './SubNavComponents/Search';
import Bag from './SubNavComponents/Bag';
import Music from './SubNavComponents/Music';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <div>Main: home</div>
  },
  {
    path: "/mac",
    subnav: () => <div><Mac /></div>,
    main: () => <div>Main: mac</div>
  },
  {
    path: "/ipad",
    subnav: () => <div><Ipad /></div>,
    main: () => <div>Main: ipad</div>
  },
  {
    path: "/iphone",
    subnav: () => <div><Iphone /></div>,
    main: () => <div>Main: iphone</div>
  },
  {
    path: "/watch",
    subnav: () => <div><Watch /></div>,
    main: () => <div>Main: watch</div>
  },
  {
    path: "/tv",
    subnav: () => <div><Tv /></div>,
    main: () => <div>Main: tv</div>
  },
  {
    path: "/music",
    subnav: () => <div><Music /></div>,
    main: () => <div>Main: music</div>
  },
  {
    path: "/support",
    subnav: () => <div><Support /></div>,
    main: () => <div>Main: support</div>
  },
  {
    path: "/search",
    subnav: () => <div><Search /></div>,
    main: () => <div>Main: search</div>
  },
  {
    path: "/bag",
    subnav: () => <div><Bag /></div>,
    main: () => <div>Main: bag</div>
  }
];

function NavWrapper() {
  return (
    <nav className="navbar-container">
      <Nav />
      <div style={{border: '1px solid red'}}>
      {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.subnav}
          />
        ))}
      </div>

      <div style={{border: '1px solid red'}}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </nav>
  );
}

export default NavWrapper;
