import React from 'react';
import { NavLink } from "react-router-dom";

import {SubNavBarContainer, SubNavBar, ContentImg} from '../../styles';


function Mac() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>
          <NavLink to='/macbook'>MacBook</NavLink>
          <NavLink to='/macbook-air'>MacBook Air</NavLink>
          <NavLink to='/macbook-pro'>MacBook Pro</NavLink>
          <NavLink to='/imac'>iMac</NavLink>
          <NavLink to='/imac-pro'>iMac Pro</NavLink>
          <NavLink to='/mac-pro'>Mac Pro</NavLink>
          <NavLink to='/mac-mini'>Mac Mini</NavLink>
          <NavLink to='/mac/accessories'>Accessories</NavLink>
          <NavLink to='/mojave'>Majove</NavLink>
          <NavLink to='/compare'>Compare</NavLink>
        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/mac/home/af/images/overview/hero/macbook_pro__c6uspyy0f8sy_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Mac;
