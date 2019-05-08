import React from 'react';
import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

import Bag from './SubNavComponents/Bag';
import { MainNavBarContainer, MainNavBar } from '../styles';


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
