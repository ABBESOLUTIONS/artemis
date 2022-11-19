import { useState, useEffect } from 'react';

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState(window.outerWidth);

  useEffect(() => {
    window.onresize = () => {
      setWindowSize(window.innerWidth);
    };
    return () => {
      window.onresize = null;
    };
  }, []);

  return windowSize;
}
