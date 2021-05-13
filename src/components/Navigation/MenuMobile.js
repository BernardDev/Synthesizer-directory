import styled, {css, keyframes} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

import {animateIn, animateOut} from './styles/animation';

const MenuMobile = (props) => {
  return (
    <StyledMobileMenu
      visibilityBurger={props.visibilityBurger}
      visibilityMenu={props.visibilityMenu}
      visibilityNavbar={props.visibilityNavbar}
    >
      <StyledLinkWrapperMobile>
        <StyledLink exact to={'/'}>
          Home
        </StyledLink>
      </StyledLinkWrapperMobile>
      <StyledLinkWrapperMobile>
        <StyledLink to={'/contribute'}>Contribute</StyledLink>
      </StyledLinkWrapperMobile>
      <StyledLinkWrapperMobile>
        <StyledLink to={'/admins'}>Register</StyledLink>
      </StyledLinkWrapperMobile>
      <StyledLinkWrapperMobile>
        <StyledLink to={'/suggestions'}>
          <FontAwesomeIcon icon={faUserCog} size='lg' transform='' />
        </StyledLink>
      </StyledLinkWrapperMobile>
    </StyledMobileMenu>
  );
};

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({activeClassName})`
  font-size: 0.8rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  &.${activeClassName} {
    color: var(--primary);
  }
`;

const StyledLinkWrapperMobile = styled.div`
  text-align: right;
`;

const StyledMobileMenu = styled.div`
  z-index: 1;
  background-color: white;
  position: fixed;
  display: flex;
  right: 0;
  top: 10vh;
  height: 8rem;
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1rem;
  display: ${(props) => {
    return props.visibilityBurger === 'true' ? 'flex' : 'none';
  }};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ${(props) => {
    return props.visibilityNavbar === 'true' && props.visibilityMenu === 'true'
      ? animateIn
      : animateOut;
  }};
  transition: top 0.6s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default MenuMobile;
