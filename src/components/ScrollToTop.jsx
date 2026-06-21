import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll position to the top whenever the route (pathname)
 * changes, so newly opened pages always start from the top instead of
 * inheriting the previous page's scroll offset.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prefer instant scroll to keep navigation snappy; pass true for
    // smooth behavior if you prefer animated scrolling.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;