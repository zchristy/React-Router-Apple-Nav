import React from 'react';
import { NavLink } from "react-router-dom";

import { SubNavBarContainer, SubNavBar, ContentImg } from '../../styles';

function Iphone() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>
          <NavLink to='/iphonexs'>iPhone Xs</NavLink>
          <NavLink to='/iphonexr'>iPhone Xr</NavLink>
          <NavLink to='/iphone8'>iPhone 8</NavLink>
          <NavLink to='/iphone7'>iPhone 7</NavLink>
          <NavLink to='/iphone/compare'>Compare</NavLink>
          <NavLink to='/apple-card'>Apple Card</NavLink>
          <NavLink to='/airpods'>AirPods</NavLink>
          <NavLink to='/iphone/accessories'>Accessories</NavLink>
          <NavLink to='/ios12'>iOS 12</NavLink>
        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/iphone/home/z/images/overview/designed_for_everyone_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Iphone;
