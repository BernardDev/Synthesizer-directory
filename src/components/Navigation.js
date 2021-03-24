import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.svg';
console.log(`logotje`, logo);

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationBar>
        <StyledLogoContainer>
          <StyledLogoSvg src={logo} alt='logo' />
        </StyledLogoContainer>
        <StyledNavLinkContainer>
          <StyledLink>
            <NavLink
              style={{textDecoration: 'none', color: 'white'}}
              to={'/contribute'}
            >
              Contribute
            </NavLink>
          </StyledLink>
          <StyledLink>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to={'/'}>
              Home
            </NavLink>
          </StyledLink>
          <StyledLink>
            <NavLink style={{color: 'white'}} to={'/admin'}>
              <FontAwesomeIcon icon={faUserCog} size='lg' transform='' />
            </NavLink>
          </StyledLink>
        </StyledNavLinkContainer>
      </NavigationBar>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const StyledLogoContainer = styled.div`
  z-index: 3;
  width: 50%;
`;

const StyledLogoSvg = styled.svg`
  height: 100%;
  width: 100%;
  z-index: 4;
`;

const StyledNavLinkContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: top;
`;

const StyledLink = styled.p`
  text-decoration: none;
  margin-right: 3rem;
  transition: all 0.3 ease 0s;
  &:hover {
    color: purple;
  }
`;

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #282828;
  height: 50px;
  width: 100%;
`;

export default Navigation;
