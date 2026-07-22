import type { Company, Mission, Source, Vehicle } from './types';

export const sources: Source[] = [
  {
    id: 'spacex-flight-5',
    title: 'Starship’s Fifth Flight Test',
    publisher: 'SpaceX',
    url: 'https://www.spacex.com/launches/mission/?missionId=starship-flight-5',
    publishedAt: '2024-10-13',
    accessedAt: '2026-07-22',
    kind: 'primary'
  },
  {
    id: 'spacex-flight-5-video',
    title: 'Starship | Fifth Flight Test',
    publisher: 'SpaceX',
    url: 'https://www.youtube.com/watch?v=hI9HQfCAw64',
    publishedAt: '2024-11-06',
    accessedAt: '2026-07-22',
    kind: 'primary'
  },
  {
    id: 'jsr-838',
    title: "Jonathan's Space Report No. 838",
    publisher: "Jonathan's Space Report",
    url: 'https://planet4589.org/space/jsr/back/news.838.txt',
    publishedAt: '2024-10-25',
    accessedAt: '2026-07-22',
    kind: 'reference'
  },
  {
    id: 'spacex-starship',
    title: 'Starship',
    publisher: 'SpaceX',
    url: 'https://www.spacex.com/vehicles/starship/',
    accessedAt: '2026-07-22',
    kind: 'primary'
  }
];

export const companies: Company[] = [
  {
    slug: 'spacex',
    name: 'SpaceX',
    founded: '2002',
    synopsis:
      'An American space technology company developing launch vehicles, spacecraft, and satellite systems.',
    significance:
      'SpaceX is developing Starship as a fully reusable launch system, extending the company’s work on recoverable launch vehicles to a much larger scale.',
    citations: [{ sourceId: 'spacex-starship' }]
  }
];

export const vehicles: Vehicle[] = [
  {
    slug: 'starship',
    companySlug: 'spacex',
    name: 'Starship',
    publicType: 'Launch system',
    status: 'development',
    synopsis:
      'A two-stage, super heavy-lift launch system comprising the Super Heavy booster and Starship upper stage.',
    significance:
      'Its flight-test campaign is pursuing full, rapid reuse of both stages—an ambition that would materially change the economics and cadence of heavy space transport.',
    citations: [{ sourceId: 'spacex-starship' }]
  }
];

export const missions: Mission[] = [
  {
    slug: 'starship-flight-5',
    companySlug: 'spacex',
    vehicleSlug: 'starship',
    name: 'Flight 5',
    publicType: 'Flight test',
    sequence: 5,
    date: '2024-10-13',
    location: 'Starbase, Texas, United States',
    dek: 'The flight that brought an orbital-class booster back to its launch tower for the first time.',
    dekCitations: [{ sourceId: 'spacex-flight-5' }, { sourceId: 'jsr-838' }],
    significance:
      'Flight 5 converted a proposed recovery method into hardware reality. Seven minutes after launch, the tower’s arms closed around the returning Super Heavy booster while Starship continued downrange to a controlled Indian Ocean splashdown.',
    significanceCitations: [{ sourceId: 'spacex-flight-5' }, { sourceId: 'jsr-838' }],
    outcome: {
      status: 'success',
      label: 'Catch and splashdown completed',
      summary:
        'Super Heavy returned to the launch site and was caught by the tower. Starship completed its planned ascent and coast, then made a controlled splashdown in the Indian Ocean.',
      legacy:
        'The catch demonstrated a central element of SpaceX’s proposed reuse architecture: recovering the booster at the launch mount without landing legs. One test did not establish routine reuse, but it removed a major question about whether the maneuver was physically achievable.',
      citations: [{ sourceId: 'spacex-flight-5' }, { sourceId: 'jsr-838' }]
    },
    facts: [
      {
        label: 'Vehicle',
        value: 'Starship / Super Heavy',
        citation: { sourceId: 'spacex-flight-5' }
      },
      {
        label: 'Flight',
        value: 'Integrated flight test 5',
        citation: { sourceId: 'spacex-flight-5' }
      },
      {
        label: 'Launch',
        value: '13 October 2024 · 12:25 UTC',
        citation: { sourceId: 'jsr-838' }
      },
      {
        label: 'Launch site',
        value: 'Starbase · Boca Chica, Texas',
        citation: { sourceId: 'jsr-838' }
      },
      {
        label: 'Booster',
        value: 'Caught by launch tower',
        citation: { sourceId: 'spacex-flight-5' }
      },
      {
        label: 'Ship',
        value: 'Controlled Indian Ocean splashdown',
        citation: { sourceId: 'spacex-flight-5' }
      }
    ],
    events: [
      {
        time: 'T+00:00',
        title: 'Liftoff',
        description: 'Starship and Super Heavy clear the launch mount at Starbase.',
        status: 'observed',
        citations: [{ sourceId: 'spacex-flight-5' }]
      },
      {
        time: 'T+02:41',
        title: 'Hot-stage separation',
        description:
          'Starship ignites its engines before separation while Super Heavy begins its return sequence.',
        status: 'observed',
        citations: [{ sourceId: 'spacex-flight-5' }]
      },
      {
        time: 'T+06:56',
        title: 'Booster catch',
        description:
          'Super Heavy descends between the launch tower arms and is secured above the pad.',
        status: 'observed',
        citations: [{ sourceId: 'spacex-flight-5' }]
      },
      {
        time: 'T+01:05:42',
        title: 'Ship splashdown',
        description:
          'After atmospheric reentry, Starship completes its landing burn and splashes down in the Indian Ocean.',
        status: 'reported',
        citations: [{ sourceId: 'spacex-flight-5' }]
      }
    ],
    highlights: [
      {
        title: 'Tower capture',
        description:
          'The booster used grid fins and engine burns to return directly to the launch site, where mechanical arms carried its weight after engine cutoff.',
        evidence: 'observed',
        citations: [{ sourceId: 'spacex-flight-5' }]
      },
      {
        title: 'Launch-site recovery',
        description:
          'Catching at the tower is intended to remove landing legs and position a recovered booster near the launch mount. Rapid reuse remains a company ambition, not an outcome proven by this flight.',
        evidence: 'company-claim',
        citations: [{ sourceId: 'spacex-flight-5' }]
      },
      {
        title: 'Controlled ship return',
        description:
          'The upper stage survived reentry and executed a flip-and-burn maneuver over the Indian Ocean, providing another full-scale test of its heat shield and control system.',
        evidence: 'observed',
        citations: [{ sourceId: 'spacex-flight-5' }]
      }
    ],
    media: [
      {
        id: 'flight-5-hero',
        kind: 'image',
        treatment: 'asset',
        src: '/media/flight-5-catch.webp',
        alt: 'Super Heavy descends beside the Starbase launch tower as its engines illuminate a cloud of exhaust.',
        caption: 'Super Heavy approaches the launch tower during Flight 5.',
        credit: 'Steve Jurvetson · Optimized WebP · Display crop',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:SpaceX_Starship_landing_IFT-5_01.jpg',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
      },
      {
        id: 'flight-5-ascent',
        kind: 'image',
        treatment: 'asset',
        src: '/media/flight-5-ascent.webp',
        alt: 'Starship ascends through a deep blue sky above a long orange exhaust plume.',
        caption: 'Starship climbs away from Starbase on its fifth integrated flight test.',
        credit: 'Steve Jurvetson · Optimized WebP · Display crop',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:SpaceX_Starship_during_IFT-5.jpg',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
      },
      {
        id: 'flight-5-catch',
        kind: 'image',
        treatment: 'asset',
        src: '/media/flight-5-ignition.webp',
        alt: 'Starship stands beside its launch tower as orange engine flame and white exhaust spread across the pad.',
        caption: 'Thirty-three Raptor engines ignite beneath Super Heavy at liftoff.',
        credit: 'Steve Jurvetson · Optimized WebP · Display crop',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:SpaceX_Starship_ignition_during_IFT-5.jpg',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
      },
      {
        id: 'flight-5-splashdown',
        kind: 'image',
        treatment: 'asset',
        src: '/media/flight-5-recovered.webp',
        alt: 'The recovered Super Heavy booster hangs between the launch tower arms against a pink morning sky.',
        caption: 'Super Heavy secured at the tower after the first catch.',
        credit: 'Steve Jurvetson · Optimized WebP · Display crop',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:SpaceX_Starship_Booster_Back_at_its_Perch_IFT-5.jpg',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
      }
    ],
    sources,
    launch: {
      site: 'Orbital Launch Pad A, Starbase',
      timeUtc: '12:25',
      citations: [{ sourceId: 'jsr-838' }]
    },
    landing: {
      mode: 'Controlled splashdown',
      site: 'Indian Ocean',
      citations: [{ sourceId: 'spacex-flight-5' }]
    },
    recovery: {
      vehicle: 'Super Heavy booster',
      method: 'Launch tower catch',
      result: 'Caught',
      citations: [{ sourceId: 'spacex-flight-5' }, { sourceId: 'jsr-838' }]
    }
  }
];
