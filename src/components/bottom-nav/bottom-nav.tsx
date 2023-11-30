import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

import styles from './bottom-nav.module.scss';

export type NavProps = {
  alwaysShow?: boolean;
  children: React.ReactNode;
};

export function BottomNav({ alwaysShow, children }: NavProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: number;

    function onPointerDown({ clientY }: PointerEvent) {
      clearTimeout(timer);

      // show navbar when tapping the bottom 20% of the window
      if (clientY < window.innerHeight * 0.8) {
        setShow(false);
        return;
      }

      setShow(true);

      timer = window.setTimeout(() => {
        setShow(false);
      }, 3000);
    }

    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      clearTimeout(timer);
    };
  }, []);

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
