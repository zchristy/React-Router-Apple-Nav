import React from 'react';
import { NavLink } from "react-router-dom";

import { SubNavBarContainer, SubNavBar, ContentImg } from '../../styles';

import Icon from '../../Assets/svgImages/svgIndex';

function Ipad() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>

        <NavLink to='/ipad-pro'>
        <Icon name="ipadProLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        ipad-pro
        </NavLink>

        <NavLink to='/ipad-air'>
        <Icon name="ipadAirLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        ipad Air
        </NavLink>

        <NavLink to='/ipad_'>
        <Icon name="ipadLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        ipad
        </NavLink>

        <NavLink to='/ipad-mini'>
        <Icon name="ipadMiniLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        ipad mini
        </NavLink>

        <NavLink to='/ipad/compare'>
        <Icon name="ipadCompareLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        Compare
        </NavLink>

        <NavLink to='/apple-pencil'>
        <Icon name="applePencilLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        Apple Pencil
        </NavLink>

        <NavLink to='/smart-keyboard'>
        <Icon name="smartKeyboardLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        Smart Keyboard
        </NavLink>

        <NavLink to='/ipad/accessories'>
        <Icon name="ipadAccessoriesLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        Accessories
        </NavLink>

        <NavLink to='/ios12'>
        <Icon name="ipadIos12Logo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
        iOS 12
        </NavLink>
        
        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/ipad/home/aq/images/overview/ipad_pro_hero__phf9t8u0esii_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Ipad;
