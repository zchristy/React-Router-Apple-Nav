import React from 'react';
import { NavLink } from "react-router-dom";

import { SubNavBarContainer, SubNavBar, ContentImg } from '../../styles';

function Tv() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>
          <NavLink to='/apple-tv-app'>Apple TV App</NavLink>
          <NavLink to='/apple-tv-plus'>Apple TV+</NavLink>
          <NavLink to='/apple-tv-4k'>Apple TV 4K</NavLink>
          <NavLink to='/apple-tv-hd'>Apple TV HD</NavLink>
          <NavLink to='/airplay'>Air Play</NavLink>
          <NavLink to='/tv/accessories'>TV Accessories</NavLink>
        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/tv/home/g/images/home/hero__fumxt11jrtea_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Tv;
