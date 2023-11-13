import { useState, useEffect } from 'react';

import styles from './example.module.scss';

export function Example() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className={styles.example}>{time.toLocaleString()}</div>;
}
