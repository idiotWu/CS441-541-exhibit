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
      >
        <track
          label='English'
          kind='subtitles'
          srcLang='en'
          src='captions/closing.vtt'
          default
        ></track>
      </FullscreenVideo>

      <BottomNav alwaysShow={showNav} threshold={0}>
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
