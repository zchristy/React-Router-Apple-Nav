import React from 'react';
import { NavLink } from "react-router-dom";




function Iphone() {
  return (
    <div style={{backgroundColor: 'red'}}>
      <div>
        <NavLink to='/iphonexs'>iPhone Xs</NavLink>
        <NavLink to='/iphonexr'>iPhone Xr</NavLink>
        <NavLink to='/iphone8'>iPhone 8</NavLink>
        <NavLink to='/iphone7'>iPhone 7</NavLink>
        <NavLink to='/iphone/compare'>Compare</NavLink>
        <NavLink to='/apple-card'>Apple Card</NavLink>
        <NavLink to='/airpods'>AirPods</NavLink>
        <NavLink to='/iphone/accessories'>Accessories</NavLink>
        <NavLink to='/ios12'>iOS 12</NavLink>
      </div>
      <div>
        <div style={{backgroundColor: 'lightgrey'}}> iPhone main content </div>
      </div>
    </div>
  );
}

export default Iphone;
