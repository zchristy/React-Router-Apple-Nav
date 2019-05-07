import React from 'react';
import { NavLink } from "react-router-dom";


function Mac() {
  return (
    <div>
      <div style={{backgroundColor: 'red'}}>
        <NavLink to='/macbook'>MacBook</NavLink>
        <NavLink to='/macbook-air'>MacBook Air</NavLink>
        <NavLink to='/macbook-pro'>MacBook Pro</NavLink>
        <NavLink to='/imac'>iMac</NavLink>
        <NavLink to='/imac-pro'>iMac Pro</NavLink>
        <NavLink to='/mac-pro'>Mac Pro</NavLink>
        <NavLink to='/mac-mini'>Mac Mini</NavLink>
        <NavLink to='/mac/accessories'>Accessories</NavLink>
        <NavLink to='/mojave'>Majove</NavLink>
        <NavLink to='/compare'>Compare</NavLink>
      </div>
      <div>
        <div style={{backgroundColor: 'lightgrey'}}> Mac main content </div>
      </div>
    </div>
  );
}

export default Mac;
