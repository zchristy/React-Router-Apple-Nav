import React from 'react';
import { NavLink } from "react-router-dom";




function Nav() {
  return (
    <div style={{backgroundColor: 'red'}}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/mac'>mac</NavLink>
      <NavLink to='/ipad'>ipad</NavLink>
      <NavLink to='/iphone'>iphone</NavLink>
      <NavLink to='/watch'>watch</NavLink>
      <NavLink to='/tv'>tv</NavLink>
      <NavLink to='/music'>music</NavLink>
      <NavLink to='/support'>support</NavLink>
      <NavLink to='/search'>search</NavLink>
      <NavLink to='/bag'>bag</NavLink>
    </div>
  );
}

export default Nav;
