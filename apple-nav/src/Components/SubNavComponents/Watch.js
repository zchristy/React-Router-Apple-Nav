import React from 'react';
import { NavLink } from "react-router-dom";

import { SubNavBarContainer, SubNavBar, ContentImg } from '../../styles';


function Watch() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>
          <NavLink to='/series4'>Apple Watch Series 4</NavLink>
          <NavLink to='/nikeplus'>Apple Watch Nike+</NavLink>
          <NavLink to='/hermes'>Apple Watch Hermes</NavLink>
          <NavLink to='/series3'>Apple Watch Series 3</NavLink>
          <NavLink to='/watchos'>Watch OS</NavLink>
          <NavLink to='/bands'>Bands</NavLink>
          <NavLink to='/watch/accessories'>Accessories</NavLink>
          <NavLink to='/watch/compare'>Compare</NavLink>
        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/watch/home/n/images/hero_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Watch;
