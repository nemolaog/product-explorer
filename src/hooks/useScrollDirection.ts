import {useEffect, useState} from 'react';

type ScrollDirection = 'up' | 'down';
/**
 * useScrollDirection hook
 * Detects whether the user is scrolling up or down.
 */
export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  /**
   * Handles window scroll events and updates scroll direction.
   */
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Always show header when user is near the top of the page.
      if (currentScrollY < 10) {
        setScrollDirection('up');
        setLastScrollY(currentScrollY)
        return
      }
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return scrollDirection;

}


