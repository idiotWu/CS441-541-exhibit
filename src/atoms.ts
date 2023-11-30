import { atom } from 'jotai';
import { STAGE } from '@constants';
import type { EventMarker } from '@interfaces';

export const activeMarkerAtom = atom<EventMarker | null>(null);

export const currentStageAtom = atom<STAGE>(STAGE.OPENING);
