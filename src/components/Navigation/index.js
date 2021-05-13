import './styles/navigation.scss';
import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import styled from 'styled-components';

import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';
import Lines from './Lines';
import Logo from './Logo';

import {animateIn, animateOut} from './styles/animation';

import useNavigation from './useNavigation';

const Navigation = () => {
  const {width} = useWindowDimensions();

  const {
    visibilityBurger,
    visibilityNavbar,
    visibilityMenu,
    setVisibilityMenu,
  } = useNavigation(width);

  const toggleVisibilityMenu = () => {
    setVisibilityMenu(!visibilityMenu);
  };

  return (
    <>
      <Container
        className='total-nav-container'
        visibilityNavbar={visibilityNavbar.toString()}
        visibilityBurger={visibilityBurger.toString()}
      >
        <Wrapper className='navigation-container'>
          <Logo />
          <MenuDesktop
            visibilityBurger={visibilityBurger.toString()}
            className='links-desktop'
          ></MenuDesktop>
        </Wrapper>
        <Burger
          visibilityBurger={visibilityBurger.toString()}
          onClick={toggleVisibilityMenu}
        >
          <Lines />
        </Burger>
      </Container>
      <MenuMobile
        visibilityBurger={visibilityBurger.toString()}
        visibilityMenu={visibilityMenu.toString()}
        visibilityNavbar={visibilityNavbar.toString()}
      />
    </>
  );
};

// const linkSharedStyles = css`
//   color: white;
// `;

// const Logo = styled(Navbar.Link)`
//   ${linkSharedStyles};
// `;

const Burger = styled.div`
  margin-right: 1.5rem;
  cursor: pointer;
  display: ${(props) => {
    return props.visibilityBurger === 'true' ? 'block' : 'none';
  }};
`;

const Container = styled.div`
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
    return props.visibilityNavbar === 'true' ? animateIn : animateOut;
  }}
`;

const Wrapper = styled.div`
  z-index: 99;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Navigation;
