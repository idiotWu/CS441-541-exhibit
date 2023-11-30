import { Modal, Skeleton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Markdown from 'react-markdown';
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
        <h2 className={styles.modalTitle}>{activeMarker?.event}</h2>
        <div className={styles.modalContent}>
          <div className={styles.video}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video src={activeMarker?.video} controls autoPlay></video>
          </div>
          <aside className={styles.sidebar}>
            <h4 className={styles.eventName}>{activeMarker?.organization}</h4>
            <time className={styles.eventDate}>{activeMarker?.date}</time>
            <Markdown className={styles.eventDescription}>
              {activeMarker?.description}
            </Markdown>
            {/* @ts-expect-error: target property does exist */}
            <Button
              className={styles.registerButton}
              href={activeMarker?.url}
              variant='contained'
              target='_blank'
            >
              I'm in!
            </Button>
          </aside>
        </div>
      </div>
    </Modal>
  );
}
