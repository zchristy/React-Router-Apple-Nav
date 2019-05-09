import React from 'react';
import { NavLink } from "react-router-dom";

import {SubNavBarContainer, SubNavBar, ContentImg} from '../../styles';

import Icon from '../../Assets/svgImages/svgIndex';

function Music() {
  return (
    <div>
      <SubNavBarContainer>
        <SubNavBar>

          <NavLink to='/apple-music'>
          <Icon name="appleMusicLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Apple Music
          </NavLink>

          <NavLink to='/itunes'>
          <Icon name="itunesLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          iTunes
          </NavLink>

          <NavLink to='/homepod'>
          <Icon name="homePodLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          HomePod
          </NavLink>

          <NavLink to='/airpods'>
          <Icon name="airpodsLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          AirPods
          </NavLink>

          <NavLink to='/ipod-touch'>
          <Icon name="ipodTouchLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          iPod Touch
          </NavLink>

          <NavLink to='/music/accessories'>
          <Icon name="musicAccessoriesLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Music Accessories
          </NavLink>

          <NavLink to='/giftcards'>
          <Icon name="giftCardsLogo" width={50} fill="black" style={{marginTop: "-30px"}}
          />
          Gift Cards
          </NavLink>

        </SubNavBar>
      </SubNavBarContainer>
      <div>
        <ContentImg src="https://www.apple.com/v/music/h/images/overview/music_hero_large_2x.jpg" />
      </div>
    </div>
  );
}

export default Music;
