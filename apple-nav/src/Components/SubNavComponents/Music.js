import React from 'react';
import { NavLink } from "react-router-dom";

import {SubNavBarContainer, SubNavBar, ContentImg} from '../../styles';



function Music() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>
          <NavLink to='/apple-music'>Apple Music</NavLink>
          <NavLink to='/itunes'>iTunes</NavLink>
          <NavLink to='/homepod'>HomePod</NavLink>
          <NavLink to='/airpods'>AirPods</NavLink>
          <NavLink to='/ipod-touch'>iPod Touch</NavLink>
          <NavLink to='/music/accessories'>Music Accessories</NavLink>
          <NavLink to='/giftcards'>Gift Cards</NavLink>
        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/music/h/images/overview/music_hero_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Music;
