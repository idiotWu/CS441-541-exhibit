import { clsx } from 'clsx';
import { useSetAtom, useAtomValue } from 'jotai';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Map, BottomNav } from '@components';
import { STAGE, eventMarkers } from '@constants';
import { currentStageAtom, viewedVideosAtom } from '@atoms';

import styles from './interactive-map.module.scss';

const markerCount = eventMarkers.length;

export function InteractiveMap() {
  const setCurrentStage = useSetAtom(currentStageAtom);
  const viewedVideos = useAtomValue(viewedVideosAtom);

  return (
    <>
      <Map />
      <BottomNav alwaysShow={viewedVideos.size === markerCount}>
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
