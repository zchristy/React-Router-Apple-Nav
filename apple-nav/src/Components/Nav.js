import React from 'react';
import { NavLink, Link } from "react-router-dom";
import Icon from '../Assets/svgImages/svgIndex';
import Bag from './SubNavComponents/Bag';
import { MainNavBarContainer, MainNavBar } from '../styles';


function Nav(){
    return (
      <MainNavBarContainer>
        <MainNavBar>
          <Link to='/'><Icon name="appleLogo" width={50} fill="white" /></Link>
          <NavLink activeClassName="active" to='/mac'>Mac</NavLink>
          <NavLink activeClassName="active" to='/ipad'>iPad</NavLink>
          <NavLink activeClassName="active" to='/iphone'>iPhone</NavLink>
          <NavLink activeClassName="active" to='/watch'>Watch</NavLink>
          <NavLink activeClassName="active" to='/tv'>TV</NavLink>
          <NavLink activeClassName="active" to='/music'>Music</NavLink>
          <NavLink activeClassName="active" to='/support'>Support</NavLink>
          <NavLink activeClassName="active" to='/search'><Icon name="searchLogo" fill="white" width={50}/></NavLink>
          <NavLink activeClassName="active" to='/bag'><Bag /></NavLink>
        </MainNavBar>
      </MainNavBarContainer>
    );

}

export default Nav;
