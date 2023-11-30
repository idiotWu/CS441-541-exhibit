import React from 'react';
import ReactDOM from 'react-dom/client';
import { useAtomValue } from 'jotai';

import { Opening, InteractiveMap, Closing } from '@stages';
import { Stage } from '@components';
import { STAGE } from '@constants';
import { currentStageAtom } from '@atoms';

import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './main.module.scss';

function App() {
  const currentStage = useAtomValue(currentStageAtom);

  return (
    <main className={styles.main}>
      <Stage show={currentStage === STAGE.OPENING}>
        <Opening />
      </Stage>
      <Stage show={currentStage === STAGE.INTERACTIVE_MAP}>
        <InteractiveMap />
      </Stage>
      <Stage show={currentStage === STAGE.CLOSING}>
        <Closing />
      </Stage>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
