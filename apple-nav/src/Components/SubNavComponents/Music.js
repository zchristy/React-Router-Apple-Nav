import React from 'react';
import { NavLink } from "react-router-dom";




function Music() {
  return (
    <div>
      <div style={{backgroundColor: 'red'}}>
        <NavLink to='/apple-music'>Apple Music</NavLink>
        <NavLink to='/itunes'>iTunes</NavLink>
        <NavLink to='/homepod'>HomePod</NavLink>
        <NavLink to='/airpods'>AirPods</NavLink>
        <NavLink to='/ipod-touch'>iPod Touch</NavLink>
        <NavLink to='/music/accessories'>Music Accessories</NavLink>
        <NavLink to='/giftcards'>Gift Cards</NavLink>
      </div>
      <div>
        <div style={{backgroundColor: 'lightgrey'}}> Music main content </div>
      </div>
    </div>
  );
}

export default Music;
