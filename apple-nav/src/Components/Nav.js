import React from 'react';
import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

import Bag from './SubNavComponents/Bag';

const MainNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: #303030;
`;

const MainNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

    a {
      text-decoration: none;
      color: white;
      font-size: 0.9rem;
      margin: 0 -10px;
    }

    .active {
      color: #A9A9A9;
    }
`;

function Nav(){
    return (
      <MainNavBarContainer>
        <MainNavBar>
          <Link to='/'>Home</Link>
          <NavLink activeClassName="active" to='/mac'>Mac</NavLink>
          <NavLink activeClassName="active" to='/ipad'>iPad</NavLink>
          <NavLink activeClassName="active" to='/iphone'>iPhone</NavLink>
          <NavLink activeClassName="active" to='/watch'>Watch</NavLink>
          <NavLink activeClassName="active" to='/tv'>TV</NavLink>
          <NavLink activeClassName="active" to='/music'>Music</NavLink>
          <NavLink activeClassName="active" to='/support'>Support</NavLink>
          <NavLink activeClassName="active" to='/search'>Search</NavLink>
          <NavLink activeClassName="active" to='/bag'><Bag /></NavLink>
        </MainNavBar>
      </MainNavBarContainer>
    );

}

export default Nav;
