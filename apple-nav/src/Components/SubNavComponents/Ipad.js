import React from 'react';
import { NavLink } from "react-router-dom";

import { SubNavBarContainer, SubNavBar, ContentImg } from '../../styles';

function Ipad() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>
        <NavLink to='/ipad-pro'>ipad-pro</NavLink>
        <NavLink to='/ipad-air'>ipad Air</NavLink>
        <NavLink to='/ipad_'>ipad</NavLink>
        <NavLink to='/ipad-mini'>ipad mini</NavLink>
        <NavLink to='/ipad/compare'>Compare</NavLink>
        <NavLink to='/apple-pencil'>Apple Pencil</NavLink>
        <NavLink to='/smart-keyboard'>Smart Keyboard</NavLink>
        <NavLink to='/ipad/accessories'>Accessories</NavLink>
        <NavLink to='/ios12'>iOS 12</NavLink>
        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/ipad/home/aq/images/overview/ipad_pro_hero__phf9t8u0esii_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Ipad;
