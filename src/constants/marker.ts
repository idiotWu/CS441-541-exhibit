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
    color: '#c34b1d',
  },
  {
    event: 'DSA New Member Orientation',
    date: 'Jan 27th, 2024',
    video: 'videos/DSA.mp4',
    organization: 'Atlanta DSA',
    url: 'https://www.atldsa.org/join/',
    description:
      'Atlanta DSA is an entirely volunteer-run, member-driven organization. We make decisions democratically in our monthly membership meetings, which are open to all. ',
    longitude: -84.4107494,
    latitude: 33.7261626,
    color: '#ec1f27',
  },
  {
    event: 'The Movement to End Mass Incarceration',
    date: 'December 14, 2023',
    video: 'videos/SCHR.mp4',
    organization: 'Southern Center for Human Rights (SCHR)',
    url: 'https://www.schr.org/upcoming_events/the-movement-to-end-mass-incarceration-the-importance-of-centering-the-voices-experience-leadership-of-formerly-incarcerated-people/',
    description: `
Join the SCHR for a discussion with formerly incarcerated leaders about ending mass incarceration, the importance of centering the voices, experiences, and leadership of formerly incarcerated people, and the critical need to prioritize ending the mass incarceration of women and girls.

**Check out the interviews with SCHR members:**

- [Waleisah S. Wilson](https://youtu.be/j8GkJsJMpdY)
- [Tanika L. Nicholas](https://youtu.be/TbQ_JLHtHAk)
`,
    longitude: -84.39086765190947,
    latitude: 33.75612914677257,
    color: '#fb8500',
  },
  {
    event:
      'Justice Lab speaker series on social science research and justice policy',
    date: 'December 11, 2023',
    video: 'videos/EMI.mp4',
    organization: 'EMI Georgia',
    url: 'https://columbiauniversity.zoom.us/webinar/register/WN_A1n4JSLZTlmJ5apzj6HZFA#/registration',
    description:
      'Based on interviews conducted with low-income Black mothers in Washington, DC, the talk will explore the precarious status of motherhood under conditions of racially unequal systems of surveillance by prisons, police, and child welfare.',
    longitude: -84.3022857,
    latitude: 33.7463465,
    color: '#c8d700',
  },
  {
    event: '"Stop Cop City!" Movement',
    date: 'Today',
    video: 'videos/stop-cop-city.mov',
    organization: 'Stop Cop City!',
    url: 'https://stopcop.city/',
    description:
      "Atlanta's ruling class wants to demolish our public forests to build a $90,000,000 Cop City. Let's stop them!",
    longitude: -84.3988567,
    latitude: 33.7504676,
    color: '#474662',
  },
];
