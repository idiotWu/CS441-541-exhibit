import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

import styles from './bottom-nav.module.scss';

export type NavProps = {
  alwaysShow?: boolean;
  threshold?: number;
  children: React.ReactNode;
};

export function BottomNav({ alwaysShow, threshold = 0.8, children }: NavProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: number;

    function onPointerDown({ clientY }: PointerEvent) {
      clearTimeout(timer);

      // show navbar when tapping the bottom 20% of the window
      if (clientY < window.innerHeight * threshold) {
        setShow(false);
        return;
      }

      setShow(s => !s);

      timer = window.setTimeout(() => {
        setShow(false);
      }, 3000);
    }

    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      clearTimeout(timer);
    };
  }, [threshold]);

  return (
    <nav
      className={clsx(styles.nav, {
        [styles.show]: alwaysShow || show,
      })}
    >
      {children}
    </nav>
  );
}
