import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

const MenuDesktop = (props) => {
  return (
    <StyledNavLinkContainer
      visibilityBurger={props.visibilityBurger}
      className='links-desktop'
    >
      <StyledLinkWrapper>
        <StyledLink exact to={'/'}>
          Home
        </StyledLink>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <StyledLink to={'/contribute'}>Contribute</StyledLink>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <StyledLink to={'/admins'}>Register</StyledLink>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <StyledLink to={'/suggestions'}>
          <FontAwesomeIcon icon={faUserCog} size='lg' transform='' />
        </StyledLink>
      </StyledLinkWrapper>
    </StyledNavLinkContainer>
  );
};

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({activeClassName})`
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  &.${activeClassName} {
    color: var(--primary);
  }
`;

const StyledLinkWrapper = styled.div``;

const StyledNavLinkContainer = styled.div`
  display: ${(props) => {
    return props.visibilityBurger === 'false' ? 'flex' : 'none';
  }};
  width: 40%;
  margin-right: 1.5rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default MenuDesktop;
