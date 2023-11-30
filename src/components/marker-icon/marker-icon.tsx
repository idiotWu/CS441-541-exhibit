import { clsx } from 'clsx';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import styles from './marker-icon.module.scss';

export type MarkerIconProps = {
  color: string;
  checked: boolean;
  className?: string;
};

export function MarkerIcon({ color, checked, className }: MarkerIconProps) {
  return (
    <i className={clsx(styles.markerIcon, className)}>
      <RoomIcon style={{ color }} fontSize='large' />
      <CheckCircleIcon
        className={clsx(styles.checkIcon, {
          [styles.checked]: checked,
        })}
        fontSize='small'
      />
    </i>
  );
}
