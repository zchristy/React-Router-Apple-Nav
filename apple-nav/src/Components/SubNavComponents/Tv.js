import React from 'react';
import { NavLink } from "react-router-dom";


function Tv() {
  return (
    <div>
      <div style={{backgroundColor: 'red'}}>
        <NavLink to='/apple-tv-app'>Apple TV App</NavLink>
        <NavLink to='/apple-tv-plus'>Apple TV+</NavLink>
        <NavLink to='/apple-tv-4k'>Apple TV 4K</NavLink>
        <NavLink to='/apple-tv-hd'>Apple TV HD</NavLink>
        <NavLink to='/airplay'>Air Play</NavLink>
        <NavLink to='/tv/accessories'>TV Accessories</NavLink>
      </div>
      <div>
        <div style={{backgroundColor: 'lightgrey'}}> Music main content </div>
      </div>
    </div>
  );
}

export default Tv;
