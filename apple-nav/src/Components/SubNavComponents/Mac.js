import React from 'react';
import { NavLink, Link } from "react-router-dom";

import styled from 'styled-components';

import {SubNavBarContainer, SubNavBar, ContentImg} from '../../styles';

import Icon from '../../Assets/svgImages/svgIndex';

function Mac() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>

          <NavLink to='/macbook'>
          <Icon name="macBookLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          MacBook
          </NavLink>

          <NavLink to='/macbook-air'>
          <Icon name="macBookAirLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          MacBook Air</NavLink>

          <NavLink to='/macbook-pro'>
          <Icon name="macBookProLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          MacBook Pro</NavLink>

          <NavLink to='/imac'>
          <Icon name="imacLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          iMac</NavLink>

          <NavLink to='/imac-pro'>
          <Icon name="imacProLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          iMac Pro</NavLink>

          <NavLink to='/mac-pro'>
          <Icon name="macProLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          Mac Pro</NavLink>

          <NavLink to='/mac-mini'>
          <Icon name="macMiniLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          Mac Mini</NavLink>

          <NavLink to='/mac/accessories'>
          <Icon name="macAccessoriesLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          Accessories</NavLink>

          <NavLink to='/mojave'>
          <Icon name="mojaveLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          Majove</NavLink>

          <NavLink to='/compare'>
          <Icon name="macCompareLogo" width={50} fill="black" style={{marginTop: "-30px"}}
            />
          Compare</NavLink>

        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/mac/home/af/images/overview/hero/macbook_pro__c6uspyy0f8sy_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Mac;
