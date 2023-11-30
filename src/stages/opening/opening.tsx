import { useSetAtom } from 'jotai';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { STAGE } from '@constants';
import { currentStageAtom } from '@atoms';
import { BottomNav, FullscreenVideo, type VideoHandler } from '@components';

import styles from './opening.module.scss';

export function Opening() {
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef<VideoHandler | null>(null);
  const setCurrentStage = useSetAtom(currentStageAtom);

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className={styles.overlay}
            exit={{ opacity: 0, scale: 1.1 }}
          >
            <h1>Hope for the Future</h1>
            <Button
              variant='outlined'
              onClick={() => {
                setShowOverlay(false);
                videoRef.current?.play();
              }}
            >
              EXPLORE
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <FullscreenVideo src='videos/introduction_x265.mp4' ref={videoRef} />

      {!showOverlay && (
        <BottomNav>
          <div className={styles.nav}>
            <Fab
              variant='extended'
              onClick={() => setCurrentStage(STAGE.INTERACTIVE_MAP)}
            >
              Interactive Map
              <ChevronRightIcon />
            </Fab>
          </div>
        </BottomNav>
      )}
    </>
  );
}
