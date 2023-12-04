import type { EventMarker } from '@interfaces';

// events should be sorted by date in ascending order
export const eventMarkers: EventMarker[] = [
  {
    event: 'Tell Corporations to Divest from Cop City!',
    date: 'Today',
    video: 'videos/CMB.mov',
    caption: 'captions/CMB.vtt',
    organization: 'Community Movement Builders',
    url: 'https://campaigns.organizefor.org/petitions/tell-corporations-to-divest-from-cop-city',
    qrCode: 'qr-codes/CMB.png',
    description: `
_To: Emory University, Georgia Tech, Georgia State University_

We demand these universities end all financial support to the Atlanta Police Foundation and Cop City!

Black communities will be especially harmed by the police expansion and militarization that Cop City represents . Studies have shown that police with more military equipment kill more civilians, prevent less crime, and make residents feel less safe. The fake urban village APF seeks to create will train officers to view Atlanta like a warzone and treat civilians like potential enemy combatants. Let’s not mince words: The Atlanta Police Foundation has a history of using corporate donations to fund the expansion of the police at the expense of the Black community in Atlanta. Universities are key funders for Cop City despite their public commitments towards racial justice. Emory, GSU, and Georgia Tech must pick a side. They cannot stand with us if they continue to fund Cop City.
`,
    longitude: -84.4070478,
    latitude: 33.7334532,
    color: '#c34b1d',
  },
  {
    event: 'DSA New Member Orientation',
    date: 'Jan 27th, 2024',
    video: 'videos/DSA.mp4',
    caption: 'captions/DSA.vtt',
    organization: 'Atlanta DSA',
    url: 'https://www.atldsa.org/join/',
    qrCode: 'qr-codes/DSA.png',
    description: `
DSA is a volunteer group with many different programs. We campaign to win reforms that build working-class power by pressuring elected officials. We support the labor movement with public awareness campaigns, solidarity actions, and direct organizing. We’re creating working-class consciousness with our reading groups and educational events. As a democratic, grassroots organization, DSA is building a mass movement for political revolution. By paying dues, DSA members self-fund our own tools for liberation.
    `,
    longitude: -84.4107494,
    latitude: 33.7261626,
    color: '#ec1f27',
  },
  {
    event: 'The Movement to End Mass Incarceration',
    date: 'December 14, 2023',
    video: 'videos/SCHR.mp4',
    caption: 'captions/SCHR.vtt',
    organization: 'Southern Center for Human Rights (SCHR)',
    url: 'https://www.schr.org/upcoming_events/the-movement-to-end-mass-incarceration-the-importance-of-centering-the-voices-experience-leadership-of-formerly-incarcerated-people/',
    qrCode: 'qr-codes/SCHR.png',
    description: `
Join the SCHR for a discussion with formerly incarcerated leaders about ending mass incarceration, the importance of centering the voices, experiences, and leadership of formerly incarcerated people, and the critical need to prioritize ending the mass incarceration of women and girls.

**Scan the QR Codes below to view  our interviews with SCHR members:**

- ![Waleisah S. Wilson](qr-codes/interview-wilson.png)
  Waleisah S. Wilson

- ![Tanika L. Nicholas](qr-codes/interview-nicholas.png)
  Tanika L. Nicholas
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
    caption: 'captions/EMI.vtt',
    organization: 'EMI Georgia',
    url: 'https://columbiauniversity.zoom.us/webinar/register/WN_A1n4JSLZTlmJ5apzj6HZFA#/registration',
    qrCode: 'qr-codes/EMI.png',
    description: `
Based on interviews conducted with low-income Black mothers in Washington, DC, the talk will explore the precarious status of motherhood under conditions of racially unequal systems of surveillance by prisons, police, and child welfare. While most debate over police reform focuses on the carceral system's perils for Black men, this discussion responds to and produces particular perils for Black women. To tell these mothers' stories and to advance the project of narrative shifting, the talk uses the tool of "empirical poetry"--poems constructed from the narratives of these women.
    `,
    longitude: -84.3022857,
    latitude: 33.7463465,
    color: '#c8d700',
  },
  {
    event: '"Stop Cop City!" Movement',
    date: 'Today',
    video: 'videos/stop-cop-city.mov',
    caption: 'captions/stop-cop-city.vtt',
    organization: 'Stop Cop City!',
    url: 'https://stopcop.city/',
    qrCode: 'qr-codes/stop-cop-city.png',
    description: `
Atlanta Police Foundation is trying to build the largest police training facility in the US in Weelaunee Forest, a watershed surrounded by primarily Black residents who overwhelmingly oppose the project.

The plans include military-grade training facilities, a mock city to practice urban warfare, dozens of shooting ranges, and a Black Hawk helicopter landing pad.
    `,
    longitude: -84.3988567,
    latitude: 33.7504676,
    color: '#474662',
  },
];
