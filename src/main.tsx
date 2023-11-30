import React from 'react';
import ReactDOM from 'react-dom/client';

import { Map } from '@components';

import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './main.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <Map />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
