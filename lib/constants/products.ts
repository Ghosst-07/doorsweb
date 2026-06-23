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
    category: "Metal Door",
    rating: "Safety & Durability",
    description: "High quality metal doors designed for maximum safety, security, and long-term durability. Built for heavy-duty industrial, commercial, and residential use.",
    features: [
      "High quality metal doors for safety and durability",
      "Suitable for industrial, commercial & residential use",
      "Robust hinges and locking compatibility",
      "Weatherproof and fire-resistant core options"
    ],
    applications: "Factory entrances, commercial facilities, security checkpoints, and residences",
    mainImage: "/catalog_metal_door.jpg"
  },
  {
    category: "Steel Almirah",
    rating: "Premium Quality Storage",
    description: "Strong, spacious, and highly secure steel almirahs. Designed to meet the storage needs of offices, industrial facilities, and modern homes.",
    features: [
      "Strong & spacious steel almirah for office, industrial & home use",
      "Available in various sizes and specifications",
      "Multi-bend heavy-duty key lock mechanism",
      "Adjustable shelving layout for optimized space"
    ],
    applications: "Corporate offices, locker rooms, warehouses, and homes",
    mainImage: "/catalog_steel_almirah.jpg"
  },
  {
    category: "Cable Tray",
    rating: "Efficient Cable Management",
    description: "High strength, load-bearing cable trays engineered for neat and efficient cable routing. Available in perforated and ladder structures.",
    features: [
      "High strength cable trays for efficient cable management",
      "Available in various types, widths, and loading capacities",
      "Corrosion-resistant galvanized iron (GI) or powder coated finishes",
      "Easy alignment and rapid installation design"
    ],
    applications: "Power rooms, industrial manufacturing units, server racks, and utilities",
    mainImage: "/catalog_cable_tray.jpg"
  },
  {
    category: "Laser Cutting",
    rating: "CNC High Precision",
    description: "Precision CNC fiber laser cutting services for MS, SS, GI, Aluminium, and other metal sheets. Delivers high accuracy and smooth edge finishes.",
    features: [
      "Precision laser cutting services for MS, SS, GI, Aluminium & other metal sheets",
      "High accuracy & smooth, burr-free finish",
      "Custom shape programming and prototype development",
      "Fast production turnaround with minimal sheet waste"
    ],
    applications: "Custom parts fabrication, automotive bracketry, decorative screens, and panels",
    mainImage: "/catalog_laser_cutting.jpg"
  },
  {
    category: "Bending Job Work",
    rating: "CNC Press Brake Accuracy",
    description: "Advanced CNC press brake bending services for multiple metals. Provides perfect angles and repeatable quality for complex part designs.",
    features: [
      "CNC press brake bending for MS, SS, Aluminium & other metals",
      "High accuracy with perfect, repeatable bending quality",
      "Multi-bend tooling for custom enclosures and brackets",
      "Suitable for both thick structural plates and thin sheet metal"
    ],
    applications: "Control panels, enclosures, structural mounts, and custom parts",
    mainImage: "/catalog_bending.jpg"
  },
  {
    category: "Truck Body Work",
    rating: "Heavy-Duty Fabrication",
    description: "Heavy-duty truck body manufacturing customized as per carrier specs and client needs. Optimized for maximum structural strength and payload durability.",
    features: [
      "All types of truck body manufacturing as per customer requirements",
      "High strength, durable & customized fabrication solutions",
      "Reinforced frame structures to handle massive loading",
      "Protective anti-rust primers and paints"
    ],
    applications: "Cargo haulage trucks, dump trucks, tippers, and containers",
    mainImage: "/catalog_truck_body.jpg"
  },
  {
    category: "Work Trolley",
    rating: "Heavy Material Handling",
    description: "Strong, durable work trolleys built to withstand heavy-duty material transport in workshops, warehouses, and assembly environments.",
    features: [
      "Strong & durable work trolley for material handling",
      "Ideal for industrial, workshop & warehouse use",
      "Heavy-duty swivel casters with integrated brakes",
      "Sturdy steel frame design with multi-shelf utility"
    ],
    applications: "Maintenance bays, factory assembly floors, and warehouse inventory management",
    mainImage: "/catalog_work_trolley.jpg"
  }
];
