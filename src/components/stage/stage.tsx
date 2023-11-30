import { AnimatePresence, motion } from 'framer-motion';

import styles from './stage.module.scss';

export type StageProps = {
  show: boolean;
  children: React.ReactNode;
};

export function Stage({ show, children }: StageProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.stage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
