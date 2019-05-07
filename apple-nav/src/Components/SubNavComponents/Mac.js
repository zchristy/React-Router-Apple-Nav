import React from 'react';
import { Route, NavLink } from "react-router-dom";


const routes = [
  {
    path: "/mac/macbook",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/macbook-air",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/macbook-pro",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/imac",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/imac-pro",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/mac-pro",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/mac-mini",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/accessories",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/mojave",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  },
  {
    path: "/mac/compare",
    exact: true,
    content: () => <div style={{width:'100%', height:'500px', backgroundColor: 'lightgrey'}}>Content of some kind</div>
  }
];

function Mac() {
  return (
    <div style={{backgroundColor: 'red'}}>
      <NavLink to='/mac/macbook'>MacBook</NavLink>
      <NavLink to='/mac/macbook-air'>MacBook Air</NavLink>
      <NavLink to='/mac/macbook-pro'>MacBook Pro</NavLink>
      <NavLink to='/mac/imac'>iMac</NavLink>
      <NavLink to='/mac/imac-pro'>iMac Pro</NavLink>
      <NavLink to='/mac/mac-pro'>Mac Pro</NavLink>
      <NavLink to='/mac/mac-mini'>Mac Mini</NavLink>
      <NavLink to='/mac/accessories'>Accessories</NavLink>
      <NavLink to='/mac/mojave'>Majove</NavLink>
      <NavLink to='/mac/compare'>Compare</NavLink>
      <div>
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.content}
            />
          ))}
      </div>
    </div>
  );
}

export default Mac;
