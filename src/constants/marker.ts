import type { EventMarker } from '@interfaces';

// events should be sorted by date in ascending order
export const eventMarkers: EventMarker[] = [
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
    color: '#9a031e',
  },
  {
    event: 'DSA New Member Orientation',
    date: 'Jan 27th, 2024',
    video: 'videos/DSA.mp4',
    organization: 'Atlanta DSA',
    url: 'https://www.atldsa.org/join/',
    description:
      'Atlanta DSA is an entirely volunteer-run, member-driven organization. We make decisions democratically in our monthly membership meetings, which are open to all. ',
    // TODO: find accurate location
    longitude: -84.4107494,
    latitude: 33.7261626,
    color: '#274c77',
  },
  {
    event: 'The Movement to End Mass Incarceration',
    date: 'December 14th @3pm EST',
    video: 'videos/DSA.mp4',
    organization: 'Southern Center for Human Rights (SCHR)',
    url: 'https://www.schr.org/take-action/',
    description:
      'The Importance of Centering the Voices, Experience & Leadership of Formerly Incarcerated People',
    // TODO: find accurate location
    longitude: -84.3906881,
    latitude: 33.7561844,
    color: '#274c77',
  },
  {
    event:
      'Justice Lab speaker series on social science research and justice policy',
    date: 'December 11, 2023',
    video: 'videos/EMI.mp4',
    organization: 'EMI Georgia',
    url: 'https://columbiauniversity.zoom.us/webinar/register/WN_A1n4JSLZTlmJ5apzj6HZFA#/registration',
    description:
      'Provide for community information and education sessions on the issues of the youth and criminal justice systems',
    // TODO: find accurate location
    longitude: -84.2993149,
    latitude: 33.7463858,
    color: '#274c77',
  },
  {
    event: 'Stop Cop City!',
    date: 'Decemeber 2, 2023',
    video: 'videos/stop-cop-city.mov',
    organization: 'Atlanta DSA',
    url: 'https://atldsa.org/stopcopcity/',
    description:
      "Atlanta's ruling class wants to demolish our public forests to build a $90,000,000 Cop City. Let's stop them!",
    // TODO: find accurate location
    longitude: -84.4643,
    latitude: 33.8039,
    color: '#274c77',
  },
];
