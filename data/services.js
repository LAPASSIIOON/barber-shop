import IMAGES from './images/service-images.js';

export const services = [
  {
    id: 1,
    name: "Premium Haircut",
    nameAr: "حلاقة بريميوم",
    description: "Precision scissor & clipper cut tailored to your face shape and style preference. Includes hot towel finish.",
    descriptionAr: "قص دقيق بالمقص والماكينة يناسب شكل وجهك وأسلوبك. يشمل منشفة ساخنة.",
    price: "KD 12",
    duration: "45 min",
    durationMinutes: 45,
    image: IMAGES.serviceHaircut,
    category: "haircut"
  },
  {
    id: 2,
    name: "Beard Sculpting",
    nameAr: "تشذيب لحية",
    description: "Expert beard trimming, shaping & line-up with straight razor precision. Hot towel & premium oils included.",
    descriptionAr: "تشذيب وتهذيب اللحية بدقة مع موس الحلاقة. يشمل منشفة ساخنة وزيت فاخر للحية.",
    price: "KD 8",
    duration: "30 min",
    durationMinutes: 30,
    image: IMAGES.serviceBeard,
    category: "grooming"
  },
  {
    id: 3,
    name: "Haircut + Beard Combo",
    nameAr: "حلاقة + لحية",
    description: "Our most popular package. Full haircut and beard sculpting with hot towel experience.",
    descriptionAr: "باقتنا الأكثر طلباً. حلاقة كاملة وتشذيب لحية مع تجربة المنشفة الساخنة.",
    price: "KD 18",
    duration: "75 min",
    durationMinutes: 75,
    image: IMAGES.serviceCombo,
    category: "combo"
  },
  {
    id: 4,
    name: "Luxury Hair Wash & Treat",
    nameAr: "غسيل وعلاج شعر فاخر",
    description: "Deep cleanse with premium sulfate-free shampoo, scalp massage & nourishing conditioner treatment.",
    descriptionAr: "تنظيف عميق بشامبو خالٍ من المواد الكيميائية مع تدليك لفروة الرأس وعلاج مرطب للشعر.",
    price: "KD 6",
    duration: "25 min",
    durationMinutes: 25,
    image: IMAGES.serviceWash,
    category: "treatment"
  },
  {
    id: 5,
    name: "Royal Shave",
    nameAr: "حلاقة ملكية",
    description: "Traditional straight razor shave with hot towels, pre-shave oil & aftershave balm.",
    descriptionAr: "حلاقة تقليدية بموس الحلاقة مع مناشف ساخنة وزيت ما قبل الحلاقة وبلسم بعد الحلاقة.",
    price: "KD 10",
    duration: "40 min",
    durationMinutes: 40,
    image: IMAGES.serviceRoyalShave,
    category: "grooming"
  },
  {
    id: 6,
    name: "Kids Haircut",
    nameAr: "حلاقة أطفال",
    description: "Patient, friendly haircut for children under 12. Fun experience with a lollipop finish!",
    descriptionAr: "حلاقة لطيفة للأطفال تحت 12 سنة. تجربة ممتعة مع هدية في النهاية!",
    price: "KD 7",
    duration: "30 min",
    durationMinutes: 30,
    image: IMAGES.serviceKids,
    category: "haircut"
  }
];
