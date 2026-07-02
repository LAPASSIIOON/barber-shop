// Centralized image map — every visual asset in the system.
// Service images are local imports (zero external dependency).
// Non-service images remain as external Unsplash URLs.

import haircutImg from '../assets/images/services/haircut.webp'
import beardImg from '../assets/images/services/beard.webp'
import comboImg from '../assets/images/services/combo.webp'
import washImg from '../assets/images/services/wash.webp'
import shaveImg from '../assets/images/services/shave.webp'
import kidsImg from '../assets/images/services/kids.webp'

const IMAGES = {
  // --- Hero ---
  heroBg: "https://images.unsplash.com/photo-1585747861115-8ddb1e57c1c5?w=1920&q=80",

  // --- Services (local — immune to external URL failure) ---
  serviceHaircut: haircutImg,
  serviceBeard: beardImg,
  serviceCombo: comboImg,
  serviceWash: washImg,
  serviceRoyalShave: shaveImg,
  serviceKids: kidsImg,

  // --- Transformations ---
  transformationFade: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=700&q=80",
  transformationBeard: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=700&q=80",
  transformationPompadour: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=80",
  transformationRoyalShave: "https://images.unsplash.com/photo-fNXJwZY1EKk?w=700&q=80",

  // --- Gallery ---
  galleryFade: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=800&q=80",
  galleryPompadour: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
  galleryBeard: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
  galleryRoyalShave: "https://images.unsplash.com/photo-fNXJwZY1EKk?w=800&q=80",
  galleryCombo: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=800&q=80",
  galleryHotTowel: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  galleryTools: "https://images.unsplash.com/photo-1585747861115-8ddb1e57c1c5?w=800&q=80",
  galleryClipper: "https://images.unsplash.com/photo-1593702288056-2c160df0c1b4?w=800&q=80",

  // --- Barbers (avatars) ---
  barberKarim: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  barberYousef: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&q=80",
  barberHassan: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
};

export default IMAGES;
