import React from 'react';
import styled from 'styled-components';
import logo from '../../img/synth2.svg';
import {NavLink} from 'react-router-dom';

const Logo = () => {
  return (
    <StyledLogoContainer>
      <StyledLink to={'/'}>
        <StyledImage src={logo} />
      </StyledLink>
    </StyledLogoContainer>
  );
};

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({activeClassName})`
  font-size: 0.8rem;
  font-weight: 500;
  color: blue;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  &.${activeClassName} {
    color: var(--primary);
  }
`;

const StyledLogoContainer = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
`;

const StyledImage = styled.img`
  width: 70px;
  height: 70px;
`;

export default Logo;
