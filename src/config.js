// ===== Fill in each cleaner's details here =====
export const BIZ = {
  name: "Barron's Cleaning Services",
  area: "Temecula, Murrieta, Menifee & nearby",
  tagline: "Your home, cared for like our own.",
  intro: "Flora and her team clean homes and offices across southwest Riverside County. Many of our clients have had us back every two weeks for years: thorough, on time, and always respectful of your home.",
  phone: "(951) 490-8095",
  phoneRaw: "9514908095",
  email: "",
  hours: "Mon–Sat, 7am–5pm · Closed Sunday",
  responseTime: "We'll call or text you back to confirm the details.",
  towns: ["Temecula", "Murrieta", "Menifee", "Sun City", "Lake Elsinore", "Wildomar", "Winchester", "Hemet"],
  // ZIP codes you serve, used by the ZIP checker
  zips: [
    "92590", "92591", "92592", "92593", "92589", // Temecula
    "92562", "92563", "92564", // Murrieta
    "92584", "92585", "92586", "92587", // Menifee & Sun City
    "92530", "92531", "92532", // Lake Elsinore
    "92595", // Wildomar
    "92596", // Winchester
    "92543", "92544", "92545", "92546", // Hemet
  ],
  rating: "", // leave empty to hide the star rating
  reviewCount: "10",
  googleUrl: "#", // link to the Google Business profile ("#" hides the link)
  services: [
    { name: "Standard cleaning", short: "Regular upkeep, weekly or every two weeks", recurring: true },
    { name: "Deep clean", short: "First visit or a full top-to-bottom reset" },
    { name: "Move-in / move-out cleaning", short: "Empty home, ready for keys" },
    { name: "Office & workplace cleaning", short: "Offices and small workplaces" },
  ],
  // Short points shown in the hero. Only list things that are true.
  highlights: [
    "Homes & offices",
    "Weekly or every-two-week visits",
    "Open Monday to Saturday",
  ],
  // Only add real Google reviews, with the client's permission.
  reviews: [
    { name: "Melissa C.", when: "2023", text: "Flora and her team did an amazing and very thorough job cleaning my home. They are very kind, polite and treated my home as if it were their home. They also work very smart and efficiently." },
    { name: "Stacy L.", when: "2022", text: "These ladies have cleaned for me for several years now. They clean for me every 2 weeks and are always on time and very professional. My house always looks amazing when they are finished. They are speedy but proficient!" },
    { name: "Donna M.", when: "2023", text: "Flora was amazing! My house is beautiful, she does amazing work. She will be doing my cleaning every 2 weeks. Thank you Flora." },
    { name: "Suzie M.", when: "2022", text: "These ladies are amazing. They did a deep cleaning my first time and it was great. Now they clean for me every 2 weeks. I'm very happy with them. Would recommend them to everyone." },
    { name: "Park 06", when: "2021", text: "Wonderful job, worth the amount I paid for and did a great job at negotiating prices." },
  ],
  beforeAfterCaption: "",
  // Photos: put files in /public and set paths like "/hero.jpg". Leave empty to show a placeholder.
  photos: {
    logo: "/logo.png",
    hero: "/kitchen.jpg",
    before: "",
    after: "",
  },
  // Photo gallery: shown when there are no before/after photos.
  gallery: [
    { src: "/kitchen-stove.jpg", caption: "Kitchen" },
    { src: "/bathroom.jpg", caption: "Bathroom" },
    { src: "/living-room.jpg", caption: "Living room" },
  ],
  // Sections: set to false to hide.
  showReviews: true,
  showBeforeAfter: false,
  showGallery: true,
};
