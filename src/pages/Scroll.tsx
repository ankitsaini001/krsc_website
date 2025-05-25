import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollAbove = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollAbove;