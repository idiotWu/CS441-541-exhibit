import React from 'react';
import ReactDOM from 'react-dom/client';

import styles from './main.module.scss';

function App() {
  return (
    <div className={styles.main}>
      <h1>Hello World</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
