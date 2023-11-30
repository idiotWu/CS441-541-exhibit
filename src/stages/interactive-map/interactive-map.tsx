import { clsx } from 'clsx';
import { useSetAtom } from 'jotai';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Map, BottomNav } from '@components';
import { STAGE } from '@constants';
import { currentStageAtom } from '@atoms';

import styles from './interactive-map.module.scss';

export function InteractiveMap() {
  const setCurrentStage = useSetAtom(currentStageAtom);

  return (
    <>
      <Map />
      <BottomNav>
        <div className={clsx(styles.nav, styles.prev)}>
          <Fab
            variant='extended'
            onClick={() => setCurrentStage(STAGE.OPENING)}
          >
            <ChevronLeftIcon />
            Introduction
          </Fab>
        </div>
        <div className={clsx(styles.nav, styles.next)}>
          <Fab
            variant='extended'
            onClick={() => setCurrentStage(STAGE.CLOSING)}
          >
            Closing
            <ChevronRightIcon />
          </Fab>
        </div>
      </BottomNav>
    </>
  );
}
