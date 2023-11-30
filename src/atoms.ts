import { atom } from 'jotai';
import type { EventMarker } from '@interfaces';

export const activeMarkerAtom = atom<EventMarker | null>(null);
