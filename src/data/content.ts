import type { WebsiteContent } from '../types/content';

export const defaultContent: WebsiteContent = {
  home: {
    tagline: 'MIND | BODY | SPIRIT',
    description:
      'Finding a sport that covers fitness, strength, flexibility and meditation is not easy but at UTS Taekwondo 태권도 that is our aim!',
    reasonsToJoin: [
      'Wanting to maximise the uni experience',
      'Learning a martial art',
      'Improving physical fitness increased flexibility and tone',
      'Learning self defence',
      'Competing in Taekwondo as a sport',
    ],
    classesDescription:
      'Our classes and events are designed to cover a wide range of areas including traditional and sport taekwondo, fitness and social activities for both university students and the general public.',
    aimsDescription:
      'At UTS Taekwondo all our classes aim to train your mind, body and spirit in a fun and challenging environment and our range of class times means they won\'t get in the way of your university lectures or your day job.',
    heroImage: '/images/hero-banner.jpg',
  },
  about: {
    heroImage: '/images/about-hero.jpg',
    taekwondoDescription:
      'The name Taekwondo 태권도 is derived from the Korean word "Tae 태" meaning foot, "Kwon 권" meaning fist and "Do 도" meaning way of. Thus, Taekwondo 태권도 literally means "the way of the foot and fist".',
    tenets: [
      {
        koreanName: '예의',
        englishName: 'Courtesy',
        romanized: 'Ye-ui',
        description:
          'Courtesy is an important part of the Taekwondo way. Respect must be shown to all instructors, fellow students, and opponents.',
      },
      {
        koreanName: '염치',
        englishName: 'Integrity',
        romanized: 'Yeom-chi',
        description:
          'Integrity means honesty and strong moral principles. One should always strive to be honest in word and deed.',
      },
      {
        koreanName: '인내',
        englishName: 'Perseverance',
        romanized: 'In-nae',
        description:
          'Perseverance is the ability to continue despite difficulties. In Taekwondo, one must persevere through training to improve.',
      },
      {
        koreanName: '극기',
        englishName: 'Self-control',
        romanized: 'Geuk-gi',
        description:
          'Self-control is the ability to regulate one\'s emotions and behavior. A true martial artist must have perfect self-control.',
      },
      {
        koreanName: '백절불굴',
        englishName: 'Indomitable spirit',
        romanized: 'Baek-jeol-bul-gul',
        description:
          'Indomitable spirit is an unbreakable will to succeed. No matter the challenge, one must never give up.',
      },
    ],
    basicTerminology: {
      numerals:
        'Hana (1), Dul (2), Set (3), Net (4), Dasot (5), Yesot (6), Ilgop (7), Yeodeol (8), Ahop (9), Yeol (10)',
      commands:
        'Charyeot (Attention), Kyeongrye (Bow), Junbi (Ready), Sijak (Start), Kalman (Stop), Kuman (Finish)',
      poomsae: 'Taegeuk, Gichocho-A, Gichocho-B, Taebeak, Kwang-Gae, Po-Eun, Tae-Guk Sip-Sam, Ko-Dang',
      techniques:
        'Jab, Cross, Hook, High kick, Roundhouse kick, Axe kick, Side kick, Back kick, Spin kick',
      miscellaneous:
        'Dojang (Training hall), Dobok (Uniform), Belt (Rank), Sparring, Poomsae (Forms), Competition',
    },
    history:
      'UTS Taekwondo Club was established in the early 1990s and is affiliated with ActivateUTS, UTS student life and engagement.',
    committeeMembers: [
      { name: 'Hoodie Trevitt', role: 'President' },
      { name: 'Shanaz Fawnia', role: 'Vice President' },
      { name: 'Zac Morgan', role: 'Treasurer', email: 'utstkdtreasurer@gmail.com' },
      { name: 'Tina Lee', role: 'Secretary' },
      { name: 'Lan Collings', role: 'Social Media & Events Coordinator' },
      { name: 'Charkrit Atherton', role: 'Head Coach (4th Dan)' },
    ],
    committeeImage: '/images/committee.jpg',
  },
  training: {
    heroImage: '/images/training-hero.jpg',
    classesIntro: 'Join our classes at the Dance Studio in Ross Milbourne Sports Hall, UTS Building 4.',
    beginnerTip: 'We recommend starting with Monday and Wednesday classes for beginners.',
    schedule: [
      {
        day: 'Monday',
        time: '6:30pm - 8:30pm',
        activities: 'Fitness, technique, poomsae 품새',
      },
      {
        day: 'Tuesday',
        time: '8pm - 9:30pm',
        activities: 'Demo, technique, poomsae 품새',
      },
      {
        day: 'Wednesday',
        time: '6:30pm - 8:30pm',
        activities: 'Fitness, technique, sparring',
      },
      {
        day: 'Saturday',
        time: '10:00am - 12:00pm',
        activities: 'Fitness, technique, sparring',
      },
    ],
    location: 'Dance Studio, Ross Milbourne Sports Hall, UTS Building 4',
    pricing: [
      { name: 'Yearly', price: 470 },
      { name: 'Yearly (Student)', price: 450 },
      { name: 'Half Year', price: 300 },
      { name: 'Half Year (Student)', price: 280 },
      { name: '10 Class', price: 120 },
      { name: '10 Class (Student)', price: 110 },
      { name: 'Single Class', price: 15 },
    ],
    gradingPrice: 55,
    atRegistration: 50,
    uniformAndEquipment: [
      { name: 'Geup (Colour Belt) Dobok', price: 45 },
      { name: 'Dan (Black Belt) Dobok', price: 55 },
      { name: 'Bamboo T-Shirt', price: 40 },
      { name: 'Head Guard', price: 40 },
      { name: 'Shin Guard (1 pair)', price: 30 },
      { name: 'Arm Guard (1 pair)', price: 30 },
      { name: 'Hand Guard (1 pair)', price: 30 },
      { name: 'Foot Guard (1 pair)', price: 30 },
      { name: 'Groin Guard', price: 25 },
      { name: 'Special Package (shin, arm, foot & hand guards)', price: 110 },
      { name: 'UTS TKD Jacket', price: 60 },
    ],
  },
  contact: {
    heroImage: '/images/contact-hero.jpg',
    email: 'utstaekwondo@gmail.com',
    discordUrl: 'https://discord.gg/3BBzrY2cEZ',
    instagramHandle: '@utstkd',
    presidentEmail: 'utstkdpresident@gmail.com',
    treasurerEmail: 'utstkdtreasurer@gmail.com',
    location: 'Dance Studio, Ross Milbourne Sports Hall, UTS Building 4',
    locationDetails: 'Sydney',
  },
};
