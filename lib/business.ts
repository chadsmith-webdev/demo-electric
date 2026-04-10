// NWA Electric — Business data
// Swap these values with real business info

export const BUSINESS = {
  name: "NWA Electric",
  legalName: "NWA Electric LLC",
  tagline: "Northwest Arkansas' Most Trusted Residential Electrician",
  shortTagline: "Licensed. Insured. On Time.",

  phone: "(479) 555-0142",
  phonePlain: "+14795550142",
  email: "service@nwaelectric.com",

  address: {
    street: "1204 SW I St",
    city: "Bentonville",
    state: "AR",
    zip: "72712",
    full: "1204 SW I St, Bentonville, AR 72712",
  },

  license: {
    number: "E-AR-12847",
    label: "AR Electrical Contractor License #E-AR-12847",
    stateBody: "Arkansas Department of Labor",
  },

  insurance: {
    liability: "$2,000,000 General Liability",
    workers: "Worker's Compensation Insured",
  },

  founded: 2009,
  yearsInBusiness: new Date().getFullYear() - 2009,
  jobsCompleted: 1800,
  owner: {
    name: "Mike Harrington",
    title: "Master Electrician & Owner",
  },

  social: {
    facebook: "https://facebook.com/nwaelectric",
    google: "https://g.page/nwaelectric",
    nextdoor: "https://nextdoor.com/pages/nwa-electric",
  },

  domain: "nwaelectric.com",
  url: "https://nwaelectric.com",

  hours: {
    weekdays: "Mon–Fri: 7:00 AM – 6:00 PM",
    saturday: "Saturday: 8:00 AM – 3:00 PM",
    sunday: "Sunday: Emergency calls only",
    emergency: "24/7 Emergency Service Available",
  },

  rating: {
    score: 4.9,
    count: 214,
    platform: "Google",
  },
} as const;

export const SERVICE_AREAS = [
  {
    name: "Bentonville",
    state: "AR",
    zip: "72712",
    distance: 0,
    description:
      "Our home base. We serve all Bentonville neighborhoods including Downtown, Uptown, Old Town, and the Walmart AMP corridor.",
    slug: "bentonville",
  },
  {
    name: "Rogers",
    state: "AR",
    zip: "72756",
    distance: 7,
    description:
      "Serving Rogers homeowners from Pinnacle Hills to Pleasant Grove Road and everywhere in between.",
    slug: "rogers",
  },
  {
    name: "Centerton",
    state: "AR",
    zip: "72719",
    distance: 5,
    description:
      "Centerton's fastest-growing neighborhoods trust NWA Electric for new construction and panel upgrades.",
    slug: "centerton",
  },
  {
    name: "Bella Vista",
    state: "AR",
    zip: "72714",
    distance: 8,
    description:
      "Serving Bella Vista's established communities with panel upgrades for homes built in the 1970s–1990s.",
    slug: "bella-vista",
  },
  {
    name: "Springdale",
    state: "AR",
    zip: "72762",
    distance: 18,
    description:
      "From Har-Ber Meadows to Kensington Place, we handle electrical work for Springdale homeowners.",
    slug: "springdale",
  },
  {
    name: "Fayetteville",
    state: "AR",
    zip: "72701",
    distance: 22,
    description:
      "Serving Fayetteville neighborhoods near the University of Arkansas corridor and South Fayetteville.",
    slug: "fayetteville",
  },
] as const;

export const SERVICES = [
  {
    id: "panel-upgrades",
    name: "Panel Upgrades",
    shortName: "Panel Upgrades",
    description:
      "Upgrade your home from 100A to 200A or 400A service. Required for EV chargers, home additions, and older homes with Federal Pacific or Zinsco panels.",
    icon: "panel",
    href: "/services/panel-upgrades",
    featured: true,
  },
  {
    id: "ev-chargers",
    name: "EV Charger Installation",
    shortName: "EV Chargers",
    description:
      "Level 2 home charging installation for all EV brands. Includes dedicated 240V circuit, breaker, and NEMA 14-50 or hardwired charger.",
    icon: "bolt",
    href: "/services#ev-chargers",
  },
  {
    id: "whole-home-rewiring",
    name: "Whole-Home Rewiring",
    shortName: "Rewiring",
    description:
      "Full residential rewiring for homes with aluminum wiring, knob-and-tube, or deteriorated insulation. Licensed, permitted, inspected.",
    icon: "wire",
    href: "/services#rewiring",
  },
  {
    id: "lighting",
    name: "Lighting Installation",
    shortName: "Lighting",
    description:
      "Recessed cans, under-cabinet lighting, ceiling fans, smart dimmer switches, and outdoor landscape lighting.",
    icon: "light",
    href: "/services#lighting",
  },
  {
    id: "outlets-switches",
    name: "Outlets & Switches",
    shortName: "Outlets",
    description:
      "GFCI outlets in kitchens, bathrooms, garages, and outdoors. USB outlets, 240V dryer and range outlets, smart switches.",
    icon: "outlet",
    href: "/services#outlets",
  },
  {
    id: "generators",
    name: "Generator Installation",
    shortName: "Generators",
    description:
      "Standby generator hookup and transfer switch installation. Keeps your home powered through Arkansas ice storms and severe weather.",
    icon: "generator",
    href: "/services#generators",
  },
  {
    id: "inspections",
    name: "Electrical Inspections",
    shortName: "Inspections",
    description:
      "Pre-purchase home electrical inspection, code compliance review, and safety assessment. Written report included.",
    icon: "inspect",
    href: "/services#inspections",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah K.",
    location: "Bentonville, AR",
    text: "Mike and his crew upgraded our panel and installed two EV chargers in one day. Showed up on time, cleaned up after themselves, and the permit inspection passed first try.",
    rating: 5,
  },
  {
    name: "James & Carol P.",
    location: "Rogers, AR",
    text: "We had a Federal Pacific panel — NWA Electric replaced it, re-labeled every breaker, and added AFCI protection. No surprises, no upsells. Exactly what they quoted.",
    rating: 5,
  },
  {
    name: "Derek M.",
    location: "Bella Vista, AR",
    text: "Called Friday afternoon about a tripping breaker. They had someone out by 9 AM Saturday. Turned out to be overloaded circuit — fixed in two hours.",
    rating: 5,
  },
  {
    name: "Amanda T.",
    location: "Centerton, AR",
    text: "Finally got recessed lighting in our living room and master bath. The cuts were clean, the cans are perfectly spaced — you can tell these guys have done this a thousand times.",
    rating: 5,
  },
] as const;
