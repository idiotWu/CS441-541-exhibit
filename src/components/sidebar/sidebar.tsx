import { useSetAtom, useAtomValue } from 'jotai';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useMap } from 'react-map-gl';
import { useState, useCallback, Fragment } from 'react';
import { clsx } from 'clsx';

import { activeMarkerAtom, viewedVideosAtom } from '@atoms';
import { eventMarkers } from '@constants';
import type { EventMarker } from '@interfaces';
import { MarkerIcon } from '@components';

import styles from './sidebar.module.scss';

export function Sidebar() {
  const setActiveMarker = useSetAtom(activeMarkerAtom);
  const viewedVideos = useAtomValue(viewedVideosAtom);
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
      <h4 className={styles.sidebarTitle}>Organizations</h4>
      <List className={styles.eventList}>
        {eventMarkers.map(m => (
          <Fragment key={m.organization}>
            <Divider />

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick(m)}>
                <ListItemIcon>
                  <MarkerIcon color={m.color} checked={viewedVideos.has(m)} />
                </ListItemIcon>
                <ListItemText primary={m.organization} secondary={m.event} />
              </ListItemButton>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </aside>
  );
}
