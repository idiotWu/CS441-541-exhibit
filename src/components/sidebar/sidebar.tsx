import { useSetAtom } from 'jotai';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RoomIcon from '@mui/icons-material/Room';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useMap } from 'react-map-gl';
import { useState, useCallback } from 'react';
import { clsx } from 'clsx';

import { activeMarkerAtom } from '@atoms';
import { eventMarkers } from '@constants';
import type { EventMarker } from '@interfaces';

import styles from './sidebar.module.scss';

export function Sidebar() {
  const setActiveMarker = useSetAtom(activeMarkerAtom);
  const [open, setOpen] = useState(true);
  const { current: map } = useMap();

  const handleClick = useCallback(
    (marker: EventMarker) => {
      setActiveMarker(marker);

      map?.flyTo({
        center: [marker.longitude, marker.latitude],
      });
    },
    [map, setActiveMarker],
  );

  return (
    <aside
      className={clsx(styles.sidebar, {
        [styles.open]: open,
      })}
    >
      <span
        onClick={() => setOpen(!open)}
        className={clsx(styles.toggle, {
          [styles.open]: open,
        })}
        role='button'
        tabIndex={-1}
      >
        <ChevronLeftIcon className={styles.icon} />
      </span>
      <List className={styles.eventList}>
        {eventMarkers.map(m => (
          <ListItem key={m.event} disablePadding>
            <ListItemButton onClick={() => handleClick(m)}>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText primary={m.event} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
}
