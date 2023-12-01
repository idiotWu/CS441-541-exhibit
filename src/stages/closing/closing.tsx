import { useSetAtom } from 'jotai';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

import { STAGE } from '@constants';
import { currentStageAtom } from '@atoms';
import { BottomNav, FullscreenVideo } from '@components';

import styles from './closing.module.scss';

export function Closing() {
  const setCurrentStage = useSetAtom(currentStageAtom);
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <FullscreenVideo
        src='videos/closing.mov'
        autoPlay
        onEnded={() => setShowNav(true)}
      />

      <BottomNav alwaysShow={showNav}>
        <div className={styles.nav}>
          <Fab
            variant='extended'
            onClick={() => setCurrentStage(STAGE.INTERACTIVE_MAP)}
          >
            <ChevronLeftIcon />
            Interactive Map
          </Fab>
        </div>
      </BottomNav>
    </>
  );
}
