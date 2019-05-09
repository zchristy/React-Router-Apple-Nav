import React from 'react';
import { NavLink } from "react-router-dom";

import { SubNavBarContainer, SubNavBar, ContentImg } from '../../styles';

import Icon from '../../Assets/svgImages/svgIndex';

function Tv() {
  return (
    <div>
      <SubNavBarContainer style={{background: "black"}}>
        <SubNavBar>

          <NavLink to='/apple-tv-app' style={{color: "white"}}>
          <Icon name="appleTvLogo" width={50} fill="white" style={{marginTop: "-30px"}}
          />
          Apple TV App
          </NavLink>

          <NavLink to='/apple-tv-plus' style={{color: "white"}}>
          <Icon name="appleTvPlusLogo" width={50} fill="white" style={{marginTop: "-30px"}}
          />
          Apple TV+
          </NavLink>

          <NavLink to='/apple-tv-4k' style={{color: "white"}}>
          <Icon name="appleTv4kLogo" width={50} fill="white" style={{marginTop: "-30px"}}
          />
          Apple TV 4K
          </NavLink>

          <NavLink to='/apple-tv-hd' style={{color: "white"}}>
          <Icon name="appleTvHdLogo" width={50} fill="white" style={{marginTop: "-30px"}}
          />
          Apple TV HD
          </NavLink>

          <NavLink to='/airplay' style={{color: "white"}}>
          <Icon name="airPlayLogo" width={50} fill="white" style={{marginTop: "-30px"}}
          />
          Air Play
          </NavLink>

          <NavLink to='/tv/accessories' style={{color: "white"}}>
          <Icon name="tvAccessoriesLogo" width={50} fill="white" style={{marginTop: "-30px"}}
          />
          TV Accessories
          </NavLink>

        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/tv/home/g/images/home/hero__fumxt11jrtea_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Tv;
