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
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}
