import React from 'react';
import { NavLink } from "react-router-dom";




function Iphone() {
  return (
    <div style={{backgroundColor: 'red'}}>
      <NavLink to='/ipad-pro'>ipad-pro</NavLink>
      <NavLink to='/ipad-air'>ipad Air</NavLink>
      <NavLink to='/ipad'>ipad</NavLink>
      <NavLink to='/ipad-mini'>ipad mini</NavLink>
      <NavLink to='/ipad/compare'>Compare</NavLink>
      <NavLink to='/apple-pencil'>Apple Pencil</NavLink>
      <NavLink to='/smart-keyboard'>Smart Keyboard</NavLink>
      <NavLink to='/ipad/accessories'>Accessories</NavLink>
      <NavLink to='/ios12'>iOS 12</NavLink>
      <div style={{width:'100%', height:'500px'}}> iPhone </div>
    </div>
  );
}

export default Iphone;
