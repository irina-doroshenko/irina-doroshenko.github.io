import { RefObject, useEffect, useState } from 'react';

export const useIsOverflow = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = (elem: T | null) => {
      if (!elem) return;
      const isOverflow = elem.scrollWidth > elem.clientWidth;
      setIsOverflowing(isOverflow);
    };
    const handleResize = () => checkOverflow(ref.current);

    if (ref.current) {
      checkOverflow(ref.current);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  return isOverflowing;
};
