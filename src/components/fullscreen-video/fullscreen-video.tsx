import LinearProgress from '@mui/material/LinearProgress';
import {
  useRef,
  useState,
  useEffect,
  VideoHTMLAttributes,
  forwardRef,
  useImperativeHandle,
} from 'react';

import styles from './fullscreen-video.module.scss';

export type VideoHandler = {
  play: () => void;
};

export const FullscreenVideo = forwardRef<
  VideoHandler,
  VideoHTMLAttributes<HTMLVideoElement>
>((props, ref) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0.0);

  useImperativeHandle(ref, () => {
    return {
      play() {
        videoRef.current?.play();
      },
    };
  });

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const pooling = setInterval(() => {
      const { currentTime, duration } = videoRef.current!;

      setProgress((currentTime / duration) * 100);
    }, 1000);

    return () => {
      clearInterval(pooling);
    };
  }, []);

  return (
    <div className={styles.videoPlayer}>
      <video ref={videoRef} {...props} />
      <footer className={styles.progress}>
        <LinearProgress
          variant='determinate'
          color='inherit'
          value={progress}
        />
      </footer>
    </div>
  );
});
