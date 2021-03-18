import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const Navigation = ({query, handleSearch, manufacturers}) => {
  return (
    <NavigationContainer>
      <NavigationBar>
        <StyledLogoContainer>
          <StyledLogo />
        </StyledLogoContainer>
        <StyledNavLinkContainer>
          <StyledLink>
            <NavLink to={'/contribute'}>Contribute</NavLink>
          </StyledLink>
          <StyledLink>
            <NavLink to={'/'}>Home</NavLink>
          </StyledLink>
          <StyledLink>
            <FontAwesomeIcon icon={faUser} size='lg' transform='' />
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
  width: 50%;
`;

const StyledLogo = styled.div`
  margin-left: 3rem;
  height: 50px;
  width: 50px;
  background-color: turquoise;
  cursor: pointer;
`;

const StyledNavLinkContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: top;
`;

const StyledLink = styled.p`
  margin-right: 3rem;
  transition: all 0.3 ease 0s;
  &:hover {
    color: purple;
  }
`;

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  background-color: green;
  height: 50px;
  width: 100%;
`;

export default Navigation;
