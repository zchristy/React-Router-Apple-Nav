import React from 'react';
import { NavLink } from "react-router-dom";

import { SubNavBarContainer, SubNavBar, ContentImg } from '../../styles';

import Icon from '../../Assets/svgImages/svgIndex';

function Iphone() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>

          <NavLink to='/iphonexs'>
          <Icon name="iphoneXsLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          iPhone Xs
          </NavLink>

          <NavLink to='/iphonexr'>
          <Icon name="iphoneXrLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          iPhone Xr
          </NavLink>

          <NavLink to='/iphone8'>
          <Icon name="iphone8Logo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          iPhone 8
          </NavLink>

          <NavLink to='/iphone7'>
          <Icon name="iphone7Logo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          iPhone 7
          </NavLink>

          <NavLink to='/iphone/compare'>
          <Icon name="iphoneCompareLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Compare
          </NavLink>

          <NavLink to='/apple-card'>
          <Icon name="appleCardLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Apple Card
          </NavLink>

          <NavLink to='/airpods'>
          <Icon name="airpodsLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          AirPods
          </NavLink>

          <NavLink to='/iphone/accessories'>
          <Icon name="iphoneAccessoriesLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Accessories
          </NavLink>

          <NavLink to='/ios12'>
          <Icon name="iphoneIos12Logo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          iOS 12</NavLink>

        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/iphone/home/z/images/overview/designed_for_everyone_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Iphone;
