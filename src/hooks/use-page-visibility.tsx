import { useEffect, useState } from 'react';

/**
 * Hook to detect when the page/tab is visible or hidden
 * Also detects when browser window loses focus (moved to background)
 * Returns true when page is visible and window has focus, false otherwise
 */
export function usePageVisibility(): boolean {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof document !== 'undefined') {
      return !document.hidden && document.hasFocus();
    }
    return true;
  });

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden && document.hasFocus());
    };

    const handleFocus = () => {
      setIsVisible(!document.hidden && document.hasFocus());
    };

    const handleBlur = () => {
      setIsVisible(false);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return isVisible;
}
