import { Modal, Button, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Markdown from 'react-markdown';
import { useAtom } from 'jotai';
import { useState, useCallback, useEffect } from 'react';
import { activeMarkerAtom, viewedVideosAtom } from '@atoms';

import styles from './video-modal.module.scss';

export function VideoModal() {
  const [activeMarker, setActiveMarker] = useAtom(activeMarkerAtom);
  const [, setViewedVideos] = useAtom(viewedVideosAtom);
  const [open, setOpen] = useState(activeMarker !== null);

  const handleClose = useCallback(() => {
    setOpen(false);
    setActiveMarker(null);
  }, [setActiveMarker]);

  useEffect(() => {
    if (!activeMarker) {
      setOpen(false);
      return;
    }

    setOpen(true);

    setViewedVideos(v => new Set([activeMarker, ...v]));
  }, [activeMarker, setViewedVideos]);

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
            <video src={activeMarker?.video} controls autoPlay>
              <track
                label='English'
                kind='subtitles'
                srcLang='en'
                src={activeMarker?.caption}
                default
              ></track>
            </video>
          </div>
          <aside className={styles.sidebar}>
            <h4 className={styles.eventName}>{activeMarker?.event}</h4>
            <time className={styles.eventDate}>{activeMarker?.date}</time>
            <Markdown
              className={styles.eventDescription}
              components={{
                a: ({ children, ...props }) => (
                  // @ts-expect-error: it's safe to use Link here
                  <Link
                    {...props}
                    className={styles.youtubeLink}
                    target='_blank'
                  >
                    <YouTubeIcon />
                    {children}
                  </Link>
                ),
              }}
            >
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
