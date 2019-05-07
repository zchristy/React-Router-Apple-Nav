import React from 'react';
import { NavLink } from "react-router-dom";




function Watch() {
  return (
    <div>
      <div style={{backgroundColor: 'red'}}>
        <NavLink to='/series4'>Apple Watch Series 4</NavLink>
        <NavLink to='/nikeplus'>Apple Watch Nike+</NavLink>
        <NavLink to='/hermes'>Apple Watch Hermes</NavLink>
        <NavLink to='/series3'>Apple Watch Series 3</NavLink>
        <NavLink to='/watchos'>Watch OS</NavLink>
        <NavLink to='/bands'>Bands</NavLink>
        <NavLink to='/watch/accessories'>Accessories</NavLink>
        <NavLink to='/watch/compare'>Compare</NavLink>
      </div>
      <div>
        <div style={{backgroundColor: 'lightgrey'}}> Music main content </div>
      </div>
    </div>
  );
}

export default Watch;
