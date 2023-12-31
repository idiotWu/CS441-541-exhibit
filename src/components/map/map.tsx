import { useSetAtom, useAtomValue } from 'jotai';
import MapGL, { Marker } from 'react-map-gl';

import { eventMarkers } from '@constants';
import { activeMarkerAtom, viewedVideosAtom } from '@atoms';
import { VideoModal, Sidebar, MarkerIcon } from '@components';

import styles from './map.module.scss';

export function Map() {
  const setActiveMarker = useSetAtom(activeMarkerAtom);
  const viewedVideos = useAtomValue(viewedVideosAtom);

  return (
    <MapGL
      mapboxAccessToken='pk.eyJ1IjoiZG9scGhpbi13b29kIiwiYSI6ImNscGszcmljZDA0dTgybm5xN2RxNXJqN2YifQ.Haq-yMvkr9P7xc_0eG3gsA'
      initialViewState={{
        // Atlanta metropolitan area
        longitude: -84.3301,
        latitude: 33.7368,
        zoom: 12,
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
          key={m.organization}
        >
          <div className={styles.marker}>
            <MarkerIcon
              className={styles.markerIcon}
              color={m.color}
              checked={viewedVideos.has(m)}
            />
            <span className={styles.markerLabel}>{m.organization}</span>
          </div>
        </Marker>
      ))}

      <Sidebar />
      <VideoModal />
    </MapGL>
  );
}
