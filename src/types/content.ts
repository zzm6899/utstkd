// Type definitions for editable content

export interface Tenet {
  koreanName: string;
  englishName: string;
  romanized: string;
  description: string;
}

export interface ScheduleEntry {
  day: string;
  time: string;
  activities: string;
}

export interface PricingEntry {
  name: string;
  price: number;
}

export interface CommitteeMember {
  name: string;
  role: string;
  email?: string;
}

export interface HomeContent {
  tagline: string;
  description: string;
  reasonsToJoin: string[];
  classesDescription: string;
  aimsDescription: string;
  heroImage: string;
}

export interface AboutContent {
  heroImage: string;
  taekwondoDescription: string;
  tenets: Tenet[];
  basicTerminology: {
    numerals: string;
    commands: string;
    poomsae: string;
    techniques: string;
    miscellaneous: string;
  };
  history: string;
  committeeMembers: CommitteeMember[];
  committeeImage: string;
}

export interface TrainingContent {
  heroImage: string;
  classesIntro: string;
  beginnerTip: string;
  schedule: ScheduleEntry[];
  location: string;
  pricing: PricingEntry[];
  gradingPrice: number;
  atRegistration: number;
  uniformAndEquipment: PricingEntry[];
}

export interface ContactContent {
  heroImage: string;
  email: string;
  discordUrl: string;
  instagramHandle: string;
  presidentEmail: string;
  treasurerEmail: string;
  location: string;
  locationDetails: string;
}

export interface WebsiteContent {
  home: HomeContent;
  about: AboutContent;
  training: TrainingContent;
  contact: ContactContent;
}
