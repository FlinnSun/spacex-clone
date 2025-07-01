/**
 * SpaceX 产品和任务数据
 * 包含火箭、飞船、服务等所有产品信息
 */

// 主要产品数据
export const products = [
  {
    id: 'falcon9',
    name: 'FALCON 9',
    title: 'First orbital class rocket capable of reflight',
    description: 'Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond.',
    features: [
      'Reusable first stage',
      'Proven reliability with 200+ successful missions',
      'Can deliver payloads to Earth orbit and beyond',
      'Supports crew and cargo missions'
    ],
    stats: [
      { value: '22,800 kg', label: 'Payload to LEO' },
      { value: '8,300 kg', label: 'Payload to GTO' },
      { value: '4,020 kg', label: 'Payload to Mars' },
      { value: '70 m', label: 'Height' }
    ],
    image: '/images/falcon9-card.jpg',
    video: '/videos/falcon9-card.mp4',
    status: 'active',
    ctaText: 'Learn More',
    ctaLink: '#falcon9-details'
  },
  {
    id: 'falcon-heavy',
    name: 'FALCON HEAVY',
    title: 'The most powerful operational rocket in the world',
    description: 'With the ability to lift into orbit over 54 metric tons, Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, at one-third the cost.',
    features: [
      'Highest payload capacity of any operational rocket',
      'Three reusable Falcon 9 first-stage boosters',
      'Proven track record with multiple successful missions',
      'Can send large payloads to Mars and beyond'
    ],
    stats: [
      { value: '63,800 kg', label: 'Payload to LEO' },
      { value: '26,700 kg', label: 'Payload to GTO' },
      { value: '16,800 kg', label: 'Payload to Mars' },
      { value: '70 m', label: 'Height' }
    ],
    image: '/images/falcon-heavy-card.jpg',
    video: '/videos/falcon-heavy-card.mp4',
    status: 'active',
    ctaText: 'Watch Launch',
    ctaLink: '#falcon-heavy-details'
  },
  {
    id: 'dragon',
    name: 'DRAGON',
    title: 'Returning human spaceflight to the United States',
    description: 'Dragon is a free-flying spacecraft designed to deliver both crew and cargo to orbiting destinations. Dragon made history in 2012 when it became the first commercial spacecraft to deliver cargo to the International Space Station.',
    features: [
      'First commercial spacecraft to ISS',
      'Capable of carrying up to 7 passengers',
      'Autonomous docking capability',
      'Proven safety record with NASA certification'
    ],
    stats: [
      { value: '6,000 kg', label: 'Cargo Capacity' },
      { value: '7', label: 'Crew Capacity' },
      { value: '3,000 kg', label: 'Return Payload' },
      { value: '13 m³', label: 'Pressurized Volume' }
    ],
    image: '/images/dragon-card.jpg',
    video: '/videos/dragon-card.mp4',
    status: 'active',
    ctaText: 'Explore Mission',
    ctaLink: '#dragon-details'
  },
  {
    id: 'starship',
    name: 'STARSHIP',
    title: 'Making life multiplanetary',
    description: 'Starship is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world\'s most powerful launch vehicle ever developed.',
    features: [
      'Fully reusable launch system',
      'Largest payload capacity ever built',
      'Designed for interplanetary travel',
      'Rapid turnaround between flights'
    ],
    stats: [
      { value: '100+ t', label: 'Payload to LEO' },
      { value: '100+', label: 'Crew Capacity' },
      { value: '1,200 m³', label: 'Pressurized Volume' },
      { value: '120 m', label: 'Height' }
    ],
    image: '/images/starship-card.jpg',
    video: '/videos/starship-card.mp4',
    status: 'development',
    ctaText: 'Follow Development',
    ctaLink: '#starship-details'
  }
];

// 服务数据
export const services = [
  {
    id: 'human-spaceflight',
    name: 'HUMAN SPACEFLIGHT',
    title: 'Safe and reliable crew transportation',
    description: 'SpaceX is developing a revolutionary new space transportation system to enable anyone to live on other planets.',
    image: '/images/crew-mission.jpg'
  },
  {
    id: 'rideshare',
    name: 'RIDESHARE',
    title: 'Affordable access to space for small satellites',
    description: 'Transporter missions provide cost-effective access to space for small satellites.',
    image: '/images/rideshare.jpg'
  },
  {
    id: 'starshield',
    name: 'STARSHIELD',
    title: 'Secured satellite network for government use',
    description: 'Starshield leverages Starlink technology and launch capability to support national security efforts.',
    image: '/images/starshield.jpg'
  },
  {
    id: 'starlink',
    name: 'STARLINK',
    title: 'High-speed internet anywhere on Earth',
    description: 'Starlink is the world\'s first and largest satellite constellation using a low Earth orbit to deliver broadband internet.',
    image: '/images/starlink.jpg'
  }
];

// 任务成就数据
export const achievements = [
  {
    id: 'first-reflight',
    year: '2017',
    title: 'First Reflight',
    description: 'SpaceX achieved the world\'s first reflight of an orbital class rocket.',
    image: '/images/achievement-reflight.jpg'
  },
  {
    id: 'crew-demo-2',
    year: '2020',
    title: 'Crew Dragon Demo-2',
    description: 'First crewed mission launched from US soil since 2011.',
    image: '/images/achievement-crew.jpg'
  },
  {
    id: 'starship-test',
    year: '2021',
    title: 'Starship High-Altitude Test',
    description: 'Successful high-altitude flight test of Starship prototype.',
    image: '/images/achievement-starship.jpg'
  },
  {
    id: 'nasa-partnership',
    year: '2021',
    title: 'NASA Artemis Contract',
    description: 'Selected to land the first astronauts on the Moon since Apollo.',
    image: '/images/achievement-artemis.jpg'
  }
];

// 统计数据
export const stats = {
  totalLaunches: 200,
  totalLandings: 165,
  totalReflights: 150,
  totalCrewLaunched: 46,
  totalPayloadDelivered: '500,000 kg'
};

// 导航菜单数据
export const navigationData = {
  mainProducts: [
    { name: 'Falcon 9', href: '#falcon9' },
    { name: 'Falcon Heavy', href: '#falcon-heavy' },
    { name: 'Dragon', href: '#dragon' },
    { name: 'Starship', href: '#starship' }
  ],
  services: [
    { name: 'Human Spaceflight', href: '#human-spaceflight' },
    { name: 'Rideshare', href: '#rideshare' },
    { name: 'Starshield', href: '#starshield' },
    { name: 'Starlink', href: '#starlink' }
  ],
  company: [
    { name: 'Mission', href: '#mission' },
    { name: 'Launches', href: '#launches' },
    { name: 'Careers', href: '#careers' },
    { name: 'Updates', href: '#updates' },
    { name: 'Shop', href: '#shop' }
  ]
}; 