export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'pool' | 'outdoor' | 'villa' | 'dining' | 'living' | 'tech';
  image?: string;
  details: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'pool' | 'villa' | 'interior' | 'garden';
  categoryLabel: string;
  src: string;
  alt: string;
  caption: string;
}

export interface NearbySpot {
  name: string;
  category: string;
  driveTime: string;
  distance: string;
  description: string;
  icon: string;
}

export const PROPERTY_INFO = {
  name: "Solara de Alfonso",
  taglines: {
    primary: "Modern Tropical Retreat",
    quote: "Where comfort meets nature.",
    lifestyle: "Stay Solara. Slow down. Make memories."
  },
  location: {
    town: "Alfonso",
    province: "Cavite",
    country: "Philippines",
    tagline: "Cool highlands of Cavite, just 12 minutes from Tagaytay ridge",
    climate: "20°C - 27°C brisk highland mountain air",
    driveFromManila: "75–90 mins via CALAX / SLEX",
  },
  capacity: {
    guests: "Up to 16-20 Guests",
    bedrooms: "4 Spacious Sleeping Quarters + Loft",
    bathrooms: "4 Modern Bathrooms with Hot Showers",
    parking: "Private secure parking for 6+ vehicles",
  },
  pricing: {
    weekday: 14500,
    weekend: 18500,
    cleaningFee: 1500,
    currency: "₱",
    currencyCode: "PHP",
  },
  contacts: {
    phone: "+63 917 889 2768",
    whatsapp: "+639178892768",
    email: "stay@solaradealfonso.com",
    airbnbUrl: "https://www.airbnb.com/rooms/solara-de-alfonso",
    instagram: "@solaradealfonso",
    facebook: "Solara de Alfonso Retreat",
  }
};

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: "pool",
    title: "Swimming Pool & Lounge Area",
    description: "Private crystal-clear pool with submerged tanning bench, lounge daybeds, and tropical palm surround.",
    iconName: "Waves",
    category: "pool",
    image: "/src/assets/images/pool_lounge_day_1791385794076.jpg",
    details: [
      "4.5ft to 5.5ft graduated depth with child-friendly shallow ledge",
      "Submerged seating bench for relaxing drinks",
      "Teak pool loungers with plush weather-proof cushions",
      "Outdoor freshwater rain shower by the deck",
      "Illuminated night-time pool lighting for twilight dips"
    ]
  },
  {
    id: "garden",
    title: "Private Garden & Fire Pit Area",
    description: "Expansive manicured lawn with natural stone fire pit, warm fairy lights, and starlit open sky.",
    iconName: "Flame",
    category: "outdoor",
    image: "/src/assets/images/garden_firepit_night_1791385821276.jpg",
    details: [
      "Artisanal volcanic stone fire pit with firewood provided",
      "Overhead warm bistro string lighting canopy",
      "Deep Adirondack chairs and woven poufs",
      "Manicured Bermuda grass lawn ideal for morning yoga or kids' play",
      "Organic herb garden with fresh mint, basil, and rosemary for guests"
    ]
  },
  {
    id: "villa",
    title: "Modern A-Frame & Villa Accommodations",
    description: "Striking architectural pavilions featuring soaring vaulted ceilings, warm cedar paneling, and plush linens.",
    iconName: "Home",
    category: "villa",
    image: "/src/assets/images/villa_architecture_day_1791385776469.jpg",
    details: [
      "Signature high-ceiling master villa with panoramic glass wall",
      "Cozy mezzanine loft bedrooms for family or groups",
      "Hotel-grade 400-thread-count Egyptian cotton linens",
      "Inverter silent split-type air conditioning in all bedrooms",
      "Ensuite bathrooms featuring rain showers and organic bath essentials"
    ]
  },
  {
    id: "terrace",
    title: "Spacious Outdoor Terrace & Dining",
    description: "Grand covered alfresco lanai overlooking the pool and gardens, complete with dining for 16 guests.",
    iconName: "UtensilsCrossed",
    category: "dining",
    image: "/src/assets/images/terrace_alfresco_morning_1791387335072.jpg",
    details: [
      "Custom solid acacia wood 16-seater harvest dining table",
      "Built-in outdoor BBQ grilling station with premium charcoal",
      "Lush panoramic mountain breeze with ceiling fans",
      "Morning breakfast bar & pour-over coffee station",
      "Ambient dimmable bamboo pendant chandeliers"
    ]
  },
  {
    id: "kitchen",
    title: "Full Kitchen & Living Spaces",
    description: "Fully equipped gourmet kitchen with island counter, seamless open-concept living, and deep sofas.",
    iconName: "Coffee",
    category: "living",
    image: "/src/assets/images/interior_living_dining_1791385808586.jpg",
    details: [
      "Double-door inverter refrigerator, microwave, and 4-burner cooktop",
      "Rice cooker, electric kettle, air fryer, and espresso coffee machine",
      "Complete cookware, knives, porcelain plates, wine glasses, and cutlery",
      "Spacious linen sectional lounge with plush throw pillows",
      "Filtered hot & cold drinking water dispenser provided complimentary"
    ]
  },
  {
    id: "entertainment",
    title: "High-Speed Wi-Fi & Entertainment",
    description: "Dedicated fiber connectivity, 65\" 4K Smart TV, curated board games, and acoustic sound system.",
    iconName: "Wifi",
    category: "tech",
    image: "/src/assets/images/villa_entertainment_media_1791387636482.jpg",
    details: [
      "High-speed fiber internet (150+ Mbps) suitable for remote work",
      "65-inch Smart TV with Netflix, Disney+, and YouTube pre-installed",
      "Bluetooth Marshall sound system for ambient background tunes",
      "Curated classic board games, cards, and acoustic guitar",
      "Portable karaoke set available upon host request"
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Twilight Pool Sanctuary",
    category: "pool",
    categoryLabel: "Pool & Outdoors",
    src: "/src/assets/images/hero_solara_dusk_1791385759031.jpg",
    alt: "Solara de Alfonso villa and private swimming pool illuminated at dusk",
    caption: "The private illuminated pool mirrors the twilight Alfonso sky as warm villa lights invite you in."
  },
  {
    id: "gal-2",
    title: "Modern Tropical Villa Architecture",
    category: "villa",
    categoryLabel: "Villa & Architecture",
    src: "/src/assets/images/villa_architecture_day_1791385776469.jpg",
    alt: "Contemporary A-frame and glass villa with natural wood finishes",
    caption: "Clean architectural lines harmonize with lush Cavite highland flora and soaring rooflines."
  },
  {
    id: "gal-3",
    title: "Sunlit Pool & Daybed Lounges",
    category: "pool",
    categoryLabel: "Pool & Outdoors",
    src: "/src/assets/images/pool_lounge_day_1791385794076.jpg",
    alt: "Sparkling blue swimming pool surrounded by tropical banana trees and sun loungers",
    caption: "Bask under morning sunshine with refreshing cool water and gentle tropical rustle."
  },
  {
    id: "gal-4",
    title: "Open-Concept Living & Dining Room",
    category: "interior",
    categoryLabel: "Living & Interiors",
    src: "/src/assets/images/interior_living_dining_1791385808586.jpg",
    alt: "Double-height living room with warm cedar wood ceiling and comfortable linen sofa",
    caption: "Floor-to-ceiling glass sliding doors dissolve the boundary between cozy interior and lush garden."
  },
  {
    id: "gal-5",
    title: "Enchanted Fire Pit & Starlit Garden",
    category: "garden",
    categoryLabel: "Garden & Twilight",
    src: "/src/assets/images/garden_firepit_night_1791385821276.jpg",
    alt: "Stone fire pit glowing with warm embers under fairy string lights at night",
    caption: "Gather round the glowing fire pit for roasted marshmallows, guitar strumming, and deep conversations."
  },
  {
    id: "gal-6",
    title: "Alfresco Lanai & Morning Terrace",
    category: "villa",
    categoryLabel: "Villa & Architecture",
    src: "/src/assets/images/terrace_alfresco_morning_1791387335072.jpg",
    alt: "Covered wooden terrace dining area set with breakfast overlooking lush garden",
    caption: "Share morning coffee and breakfast on the shaded timber lanai caressed by gentle Cavite mountain breezes."
  }
];

export const NEARBY_ATTRACTIONS: NearbySpot[] = [
  {
    name: "Sonya's Garden",
    category: "Botanical Dining & Bakery",
    driveTime: "8 mins",
    distance: "3.8 km",
    description: "Famous secret garden restaurant known for fresh garden salads, homemade pan de sal, and lush floral pathways.",
    icon: "Flower2"
  },
  {
    name: "Antonio's Restaurant",
    category: "Fine Dining",
    driveTime: "12 mins",
    distance: "6.5 km",
    description: "Renowned Philippine culinary landmark celebrating farm-to-table fine dining in a breathtaking colonial estate.",
    icon: "Wine"
  },
  {
    name: "Twin Lakes Tagaytay",
    category: "Vineyard & Lifestyle",
    driveTime: "10 mins",
    distance: "5.2 km",
    description: "European-inspired vineyard strip overlooking Taal volcano with artisan cafes, bakeries, and grocery conveniences.",
    icon: "ShoppingBag"
  },
  {
    name: "The Gingerbread House & Reptiland",
    category: "Family Attraction",
    driveTime: "6 mins",
    distance: "3.1 km",
    description: "Whimsical fairytale bakery and play attraction nestled along the tranquil Alfonso farm country roads.",
    icon: "Sparkles"
  },
  {
    name: "Caleruega Church & Retreat Center",
    category: "Scenic Sanctuary",
    driveTime: "16 mins",
    distance: "9.4 km",
    description: "Perched on picturesque hills with hanging bridges, pine trees, and the iconic Transfiguration chapel.",
    icon: "Church"
  },
  {
    name: "Tagaytay Ridge & Taal Lake Overlook",
    category: "Iconic Vista",
    driveTime: "15 mins",
    distance: "8.0 km",
    description: "World-famous panoramic viewpoint of the Taal volcano crater island and refreshing highland climate.",
    icon: "Mountain"
  }
];
