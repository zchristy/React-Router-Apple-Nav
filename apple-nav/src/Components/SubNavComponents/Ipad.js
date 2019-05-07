import React from 'react';
import { NavLink } from "react-router-dom";




function Ipad() {
  return (
    <div>
      <div style={{backgroundColor: 'red'}}>
        <NavLink to='/ipad-pro'>ipad-pro</NavLink>
        <NavLink to='/ipad-air'>ipad Air</NavLink>
        <NavLink to='/ipad_'>ipad</NavLink>
        <NavLink to='/ipad-mini'>ipad mini</NavLink>
        <NavLink to='/ipad/compare'>Compare</NavLink>
        <NavLink to='/apple-pencil'>Apple Pencil</NavLink>
        <NavLink to='/smart-keyboard'>Smart Keyboard</NavLink>
        <NavLink to='/ipad/accessories'>Accessories</NavLink>
        <NavLink to='/ios12'>iOS 12</NavLink>
      </div>
      <div>
        <div style={{backgroundColor: 'lightgrey'}}> iPad main content </div>
      </div>
    </div>
  );
}

export default Ipad;
