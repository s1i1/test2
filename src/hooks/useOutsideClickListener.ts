import { RefObject, useEffect } from 'react';

export const useOutsideClickListener = (
  ref: RefObject<HTMLElement>,
  onClick?: () => void,
  active = true,
) => {
  useEffect(() => {
    const clickListener = (e: MouseEvent | TouchEvent) => {
      if (e.target instanceof Element) {
        if (!ref.current?.contains(e.target)) {
          onClick?.();
        }
      }
    };

    if (active) {
      document.addEventListener('mousedown', clickListener);
      document.addEventListener('touchstart', clickListener);
    }

    return () => {
      if (active) {
        document.removeEventListener('mousedown', clickListener);
        document.removeEventListener('touchstart', clickListener);
      }
    };
  }, [active, onClick, ref]);
};
