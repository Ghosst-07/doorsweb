export interface Product {
  category: string;
  rating: string;
  description: string;
  features: string[];
  applications: string;
  mainImage: string;
}

export const products: Product[] = [
  {
    category: "Steel Fire Rated Doors",
    rating: "60-120 minutes",
    description: "High-performance steel fire doors tested in accordance with international standards. Engineered with premium core materials for maximum protection.",
    features: [
      "Fire Rating: 60, 90, and 120 minutes (BS: 476 & IS: 3614 certified)",
      "Core Choices: Ceramic Wool, Rockwool, or Honeycomb",
      "Sheet Thickness: Customizable from 0.8 to 1.6 mm",
      "Structure: 1.2–2.0 mm thick pressed steel frame",
      "Finish: High-quality paint or powder coating options",
      "Hardware: Vision panels, panic bars, and sturdy hinges available"
    ],
    applications: "Commercial buildings, hospitals, schools, and industrial facilities",
    mainImage: "/Users/saad/.gemini/antigravity/brain/a363f2b3-aabe-449e-93a9-24f9772e9866/steel_fire_door_main_1776759212057.png"
  },
  {
    category: "General Metal Doors",
    rating: "Standard & Heavy Duty",
    description: "Durable GI steel doors designed for high-traffic environments, offering superior strength and longevity compared to traditional wooden doors.",
    features: [
      "Material: G.I Steel for maximum durability",
      "Hollow Metal Pressed Steel (HMPS) construction",
      "Available in Single and Double leaf configurations",
      "Rust-resistant powder coating finish",
      "Multiple color and texture options available",
      "Ideal for back-of-house and utility areas"
    ],
    applications: "Industrial facilities, warehouses, parking structures, and utilities",
    mainImage: "/Users/saad/.gemini/antigravity/brain/a363f2b3-aabe-449e-93a9-24f9772e9866/general_metal_door_main_1776759388070.png"
  },
  {
    category: "Acoustic Metal Doors",
    rating: "Premium Sound Insulation",
    description: "Specialized noise-reduction doors featuring multi-layered insulation specifically designed for recording studios, theaters, and hospitals.",
    features: [
      "High sound attenuation properties",
      "Powder coating finish for premium look",
      "Airtight gasket sealing system",
      "Heavy-duty construction for acoustic damping",
      "Customizable STC ratings",
      "Seamless integration with acoustic treatments"
    ],
    applications: "Recording studios, theaters, hospitals, and conference halls",
    mainImage: "/Users/saad/.gemini/antigravity/brain/a363f2b3-aabe-449e-93a9-24f9772e9866/acoustic_door_main_1776759168642.png"
  },
  {
    category: "Electrical Shaft Doors",
    rating: "Access Control Ready",
    description: "Compact and secure doors designed specifically for electrical shafts and service rooms, providing easy access while maintaining safety.",
    features: [
      "Designed for service room and shaft access",
      "Internal and external locking mechanisms",
      "Powder coating for aesthetic matching",
      "Durable steel construction",
      "Easy installation in recessed areas",
      "Low maintenance ventilation options available"
    ],
    applications: "Commercial panels, electrical rooms, and service shafts",
    mainImage: "/Users/saad/.gemini/antigravity/brain/a363f2b3-aabe-449e-93a9-24f9772e9866/electrical_shaft_door_main_1776759266432.png"
  },
  {
    category: "Full Glazed GI Steel Fire Doors",
    rating: "Visually Secure Protection",
    description: "Aesthetic glass-integrated steel doors providing maximum visibility without compromising on fire safety standards.",
    features: [
      "Fire-rated glass integration",
      "G.I Steel frame with powder coating finish",
      "Single and Double leaf options",
      "High-clarity vision panels",
      "Heat-resistant glass technology",
      "Combines aesthetics with core fire protection"
    ],
    applications: "Corridors, office partitions, and high-end commercial entries",
    mainImage: "/Users/saad/.gemini/antigravity/brain/a363f2b3-aabe-449e-93a9-24f9772e9866/glazed_fire_door_main_1776759512486.png"
  },
  {
    category: "Clean Room Doors",
    rating: "ISO Standard Compliant",
    description: "Precision-engineered flush doors for sterile environments, featuring non-particle shedding materials and airtight seals.",
    features: [
      "Flush surface design for easy cleaning",
      "Airtight gasket seals for contamination control",
      "Non-corrosive powder coating finish",
      "Impact resistant construction",
      "ISO compliant for pharmaceutical use",
      "Customizable dimensions for lab environments"
    ],
    applications: "Pharmaceutical manufacturing, biotech labs, and electronics assembly",
    mainImage: "/Users/saad/.gemini/antigravity/brain/a363f2b3-aabe-449e-93a9-24f9772e9866/clean_room_door_main_1776759327637.png"
  }
];
