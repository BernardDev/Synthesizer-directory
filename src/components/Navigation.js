import './navigation.scss';
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import logo from '../img/synth2.svg';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Navigation = () => {
  const {width} = useWindowDimensions();

  const [visibilityBurger, setVisibilityBurger] = useState(false);
  const [visibility, setVisibility] = useState(true);
  console.log('visibility', visibility);
  const [scrollPositionY, setScrollPositionY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (scrollPositionY > window.scrollY) {
        setVisibility(true);
      } else if (scrollPositionY < window.scrollY) {
        setVisibility(false);
      }
      setScrollPositionY(window.scrollY);
    },
    [scrollPositionY]
  );

  useEffect(() => {
    setScrollPositionY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  const visibilityBurgerToggler = () => {
    setVisibilityBurger(!visibilityBurger);
  };

  useEffect(() => {
    if (width > 768) {
      setVisibilityBurger(false);
    }
  }, [width]);

  return (
    <NavigationContainer visibility={visibility.toString()} className=''>
      <StyledLogoContainer>
        <StyledLink to={'/'}>
          <StyledImage src={logo} />
        </StyledLink>
      </StyledLogoContainer>
      <Burger className='burger' onClick={visibilityBurgerToggler}>
        <Line1 />
        <Line2 />
        <Line3 />
      </Burger>
      <StyledNavLinkContainer
        className='nav-links'
        visibility={visibilityBurger.toString()}
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
  );
};

const StyledLinkWrapper = styled.div`
  margin-right: 2rem;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 1rem;
  }
`;
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

const Burger = styled.div`
  margin-bottom: 1.5rem;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
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

const NavigationContainer = styled.div`
  min-height: 8vh;
  display: fixed;
  background-color: ${(props) =>
    props.visibility === 'true' ? 'red' : 'green'};
  left: 0;
  top: 0;
  width: 100%;
  transition: top 0.6s;
  @media (max-width: 768px) {
    /* flex-direction: column; */
  }
`;

const StyledLogoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const StyledNavLinkContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  /* display: 'none'; */
  display: ${({visibility}) => (visibility === 'true' ? 'none' : 'flex')};
`;

export default Navigation;
