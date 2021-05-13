import {useState, useEffect} from 'react';

function getWindowDimensions() {
  if (window.innerWidth < 768) {
    return {
      width: 200,
    };
  }
  return {
    width: 769,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      const resize = getWindowDimensions();
      if (resize.width === windowDimensions.width) return;
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions.width]);
  return windowDimensions;
}
