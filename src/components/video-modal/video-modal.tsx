import { Modal, Skeleton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAtom } from 'jotai';
import { useState, useCallback, useEffect } from 'react';
import { activeMarkerAtom } from '@atoms';

import styles from './video-modal.module.scss';

export function VideoModal() {
  const [activeMarker, setActiveMarker] = useAtom(activeMarkerAtom);
  const [open, setOpen] = useState(activeMarker !== null);

  const handleClose = useCallback(() => {
    setOpen(false);
    setActiveMarker(null);
  }, [setActiveMarker]);

  useEffect(() => {
    setOpen(activeMarker !== null);
  }, [activeMarker]);

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.modalBody}>
        <CloseIcon
          role='button'
          className={styles.closeButton}
          onClick={handleClose}
        />
        <h2 className={styles.modalTitle}>{activeMarker?.organization}</h2>
        <div className={styles.modalContent}>
          <div className={styles.video}>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width='100%'
              height='90%'
            />
            video player goes here...
          </div>
          <aside className={styles.sidebar}>
            <h4 className={styles.eventName}>{activeMarker?.event}</h4>
            <time className={styles.eventDate}>{activeMarker?.date}</time>
            <p className={styles.eventDescription}>
              {activeMarker?.description}
            </p>
            {/* @ts-expect-error: target property does exist */}
            <Button
              className={styles.registerButton}
              href={activeMarker?.url}
              variant='contained'
              target='_blank'
            >
              Register Now!
            </Button>
          </aside>
        </div>
      </div>
    </Modal>
  );
}
