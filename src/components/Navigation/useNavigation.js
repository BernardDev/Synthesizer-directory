import {useState, useEffect, useRef, useCallback} from 'react';

const useNavigation = (width) => {
  const [visibilityBurger, setVisibilityBurger] = useState(false);
  const [visibilityMenu, setVisibilityMenu] = useState(false);
  const [visibilityNavbar, setVisibilityNavbar] = useState(true);

  const scrollPositionY = useRef(window.pageYOffset);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (
        scrollPositionY.current > window.pageYOffset &&
        visibilityNavbar === false
      ) {
        setVisibilityNavbar(true);
      } else if (
        scrollPositionY.current < window.pageYOffset &&
        visibilityNavbar === true
      ) {
        setVisibilityNavbar(false);
      }
      scrollPositionY.current = window.pageYOffset;
    },
    [visibilityNavbar]
  );

  useEffect(() => {
    setVisibilityMenu(false);
    scrollPositionY.current = window.pageYOffset;
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (width > 768) {
      setVisibilityMenu(false);
      setVisibilityBurger(false);
    } else {
      setVisibilityMenu(false);
      setVisibilityBurger(true);
    }
  }, [width]);

  return {
    visibilityBurger,
    visibilityNavbar,
    visibilityMenu,
    setVisibilityMenu,
  };
};

export default useNavigation;
