import { useSetAtom } from 'jotai';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { STAGE } from '@constants';
import { currentStageAtom } from '@atoms';
import { BottomNav } from '@components';

import styles from './closing.module.scss';

export function Closing() {
  const setCurrentStage = useSetAtom(currentStageAtom);

  return (
    <>
      <video
        src=''
        // autoPlay
        className={styles.video}
      />

      <BottomNav alwaysShow>
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
