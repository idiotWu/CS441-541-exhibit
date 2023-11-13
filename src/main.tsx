import React from 'react';
import ReactDOM from 'react-dom/client';

import { Example } from '@components';

import styles from './main.module.scss';

function App() {
  return (
    <div className={styles.main}>
      <Example />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
