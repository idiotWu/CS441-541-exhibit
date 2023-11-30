import type { EventMarker } from '@interfaces';

export const eventMarkers: EventMarker[] = [
  {
    event: 'Stop Cop City!',
    date: 'Decemeber 2, 2023',
    video: 'videos/stop-cop-city.mov',
    organization: 'Atlanta DSA',
    url: 'https://atldsa.org/stopcopcity/',
    description:
      "Atlanta's ruling class wants to demolish our public forests to build a $90,000,000 Cop City. Let's stop them!",
    // TODO: find accurate location
    longitude: -84.3643,
    latitude: 33.7039,
  },
  {
    event: 'Tell Corporations to Divest from Cop City!',
    date: 'Today',
    video: 'videos/CMB.mov',
    organization: 'Community Movement Builders',
    url: 'https://campaigns.organizefor.org/petitions/tell-corporations-to-divest-from-cop-city',
    description: `
_To: Emory University, Georgia Tech, Georgia State University_

We demand these universities end all financial support to the Atlanta Police Foundation and Cop City!
`,
    longitude: -84.4070478,
    latitude: 33.7334532,
  },
];
