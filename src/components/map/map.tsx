import { useSetAtom } from 'jotai';
import MapGL, { Marker } from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';

import { eventMarkers } from '@constants';
import { activeMarkerAtom } from '@atoms';
import { VideoModal, Sidebar } from '@components';

import styles from './map.module.scss';

export function Map() {
  const setActiveMarker = useSetAtom(activeMarkerAtom);

  return (
    <MapGL
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        // Atlanta metropolitan area
        longitude: -84.3643,
        latitude: 33.7539,
        zoom: 10,
        bearing: 0,
        pitch: 0,
      }}
      mapStyle='mapbox://styles/mapbox/streets-v12'
    >
      {eventMarkers.map(m => (
        <Marker
          latitude={m.latitude}
          longitude={m.longitude}
          onClick={() => setActiveMarker(m)}
          anchor='bottom-left'
          key={m.event}
        >
          <div className={styles.marker}>
            <RoomIcon className={styles.markerIcon} />
            <span className={styles.markerLabel}>{m.event}</span>
          </div>
        </Marker>
      ))}

      <Sidebar />
      <VideoModal />
    </MapGL>
  );
}
