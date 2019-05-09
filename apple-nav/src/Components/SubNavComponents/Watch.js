import React from 'react';
import { NavLink } from "react-router-dom";

import { SubNavBarContainer, SubNavBar, ContentImg } from '../../styles';

import Icon from '../../Assets/svgImages/svgIndex';

function Watch() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>

          <NavLink to='/series4'>
          <Icon name="appleWatch4Logo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Apple Watch Series 4
          </NavLink>

          <NavLink to='/nikeplus'>
          <Icon name="appleWatchNikeLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Apple Watch Nike+
          </NavLink>

          <NavLink to='/hermes'>
          <Icon name="appleWatchHermesLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Apple Watch Hermes
          </NavLink>

          <NavLink to='/series3'>
          <Icon name="appleWatch3Logo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Apple Watch Series 3
          </NavLink>

          <NavLink to='/watchos'>
          <Icon name="watchOsLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Watch OS
          </NavLink>

          <NavLink to='/bands'>
          <Icon name="bandsLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Bands
          </NavLink>

          <NavLink to='/watch/accessories'>
          <Icon name="watchAccessoriesLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Accessories
          </NavLink>

          <NavLink to='/watch/compare'>
          <Icon name="watchCompareLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Compare
          </NavLink>

        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/watch/home/n/images/hero_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Watch;
