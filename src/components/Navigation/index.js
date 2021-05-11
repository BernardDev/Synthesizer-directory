import './navigation.scss';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/synth2.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Navigation = () => {
  const [visibilityBurger, setVisibilityBurger] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [visibility, setVisibility] = useState(true);

  const scrollPositionY = useRef(window.pageYOffset);

  const {width} = useWindowDimensions();
  console.log('width', width);

  useEffect(() => {
    if (width > 768) {
      setShowMenu(false);
      setVisibilityBurger(false);
    } else {
      setShowMenu(false);
      setVisibilityBurger(true);
    }
  }, [width]);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (
        scrollPositionY.current > window.pageYOffset &&
        visibility === false
      ) {
        setTimeout(function () {
          setVisibility(true);
        }, 200);
      } else if (
        scrollPositionY.current < window.pageYOffset &&
        visibility === true
      ) {
        setTimeout(function () {
          setVisibility(false);
        }, 333);
      }
      scrollPositionY.current = window.pageYOffset;
    },
    [visibility]
  );

  useEffect(() => {
    setShowMenu(false);
    scrollPositionY.current = window.pageYOffset;
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  const showMenuToggle = () => {
    setTimeout(function () {
      setShowMenu(!showMenu);
    }, 100);
  };

  return (
    <>
      <TotalNavigationContainer
        className='total-nav-container'
        visibility={visibility.toString()}
        visibilityBurger={visibilityBurger.toString()}
      >
        <NavigationContainer className='navigation-container'>
          <StyledLogoContainer>
            <StyledLink to={'/'}>
              <StyledImage src={logo} />
            </StyledLink>
          </StyledLogoContainer>
          <StyledNavLinkContainer
            visibilityBurger={visibilityBurger.toString()}
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
        </NavigationContainer>
        <Burger
          className='burger'
          visibilityBurger={visibilityBurger.toString()}
          onClick={showMenuToggle}
        >
          <Line1 />
          <Line2 />
          <Line3 />
        </Burger>
      </TotalNavigationContainer>
      <StyledNavLinkContainerMobile
        visibilityBurger={visibilityBurger.toString()}
        showMenu={showMenu.toString()}
        visibility={visibility.toString()}
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
      </StyledNavLinkContainerMobile>
    </>
  );
};

const StyledNavLinkContainerMobile = styled.div`
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
  display: ${(props) => (props.visibilityBurger === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ${(props) => {
    return props.visibility === 'true' && props.showMenu === 'true'
      ? animateIn
      : animateOut;
  }}
  transition: top 0.6s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const TotalNavigationContainer = styled.div`
  overflow: hidden;
  background-color: black;
  z-index: 99;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  height: 10vh;
  left: 0;
  top: 0;
  opacity: 1;
  ${(props) => {
    return props.visibility === 'true' ? animateIn : animateOut;
  }}
`;

const NavigationContainer = styled.div`
  z-index: 99;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoContainer = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
`;

const Burger = styled.div`
  z-index: 999;
  margin-right: 1.5rem;
  cursor: pointer;
  display: ${(props) => (props.visibilityBurger === 'true' ? 'block' : 'none')};
`;

const StyledNavLinkContainer = styled.div`
  display: ${(props) => (props.visibilityBurger === 'false' ? 'flex' : 'none')};
  width: 40%;
  margin-right: 1.5rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledLinkWrapper = styled.div``;

const StyledLinkWrapperMobile = styled.div`
  text-align: right;
`;

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({activeClassName})`
  font-size: 0.8rem;
  font-weight: 500;
  color: red;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  &.${activeClassName} {
    color: var(--primary);
  }
`;

const Line1 = styled.div`
  margin: 3px;
  width: 20px;
  height: 3px;
  background-color: white;
`;

const Line2 = styled.div`
  margin: 3px;
  width: 20px;
  height: 3px;
  background-color: white;
`;

const Line3 = styled.div`
  margin: 3px;
  width: 20px;
  height: 3px;
  background-color: white;
`;

const StyledImage = styled.img`
  width: 70px;
  height: 70px;
`;

// ----------------------------------------------------------------

const animateYin = keyframes`
from {
   opacity: 0;
   transform: translateY(-200px);
 }
 to {
   opacity: 1;
   transform: translateY(0px);
 };
`;

const animateYout = keyframes`
from {
   opacity: 1;
   transform: translateY(0px);
 }
 to {
   opacity: 0;
   transform: translateY(-200px);
 };
`;

const animateIn = css`
  animation: ${animateYin} 0.8s ease;
  animation-fill-mode: forwards;
`;

const animateOut = css`
  animation: ${animateYout} 0.8s ease;
  animation-fill-mode: forwards;
`;

export default Navigation;
