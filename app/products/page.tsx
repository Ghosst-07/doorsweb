"use client";

export default function Products() {
  const products = [
    {
      category: "Steel Fire Rated Doors",
      rating: "60-180 minutes",
      description:
        "Heavy-duty steel doors engineered for maximum fire resistance. Features reinforced steel frames, intumescent seals, and powder-coated finishes.",
      features: [
        "Fire ratings: 60, 90, 120, and 180 minutes",
        "UL and NFPA certified",
        "Customizable dimensions up to 10' x 12'",
        "Multiple finish options available",
        "Self-closing hardware included",
        "Smoke seal integration",
      ],
      applications: "Commercial buildings, hospitals, schools, warehouses",
    },
    {
      category: "Wooden Fire Rated Doors",
      rating: "30-90 minutes",
      description:
        "Aesthetically pleasing wooden fire doors combining safety with elegant design. Suitable for both commercial and high-end residential applications.",
      features: [
        "Fire ratings: 30, 60, and 90 minutes",
        "Real wood veneer or laminate finishes",
        "Sound attenuation up to 45 STC",
        "Environmentally friendly materials",
        "Warp-resistant construction",
        "Customizable stain and paint options",
      ],
      applications:
        "Hotels, residential buildings, executive offices, healthcare",
    },
    {
      category: "Lead Lined Doors",
      rating: "X-Ray Protection",
      description:
        "Specialized doors providing radiation protection for medical and industrial facilities. Available in various lead equivalency ratings.",
      features: [
        'Lead equivalency: 1/32" to 1/4"',
        "X-ray protection certified",
        "Available in steel or wood frames",
        "Vision panels with leaded glass",
        "Seamless lead lining",
        "HIPAA compliant options",
      ],
      applications:
        "Hospitals, dental offices, veterinary clinics, research labs",
    },
    {
      category: "General Metal Doors",
      rating: "Standard Duty",
      description:
        "Durable metal doors for high-traffic areas. Available in hollow metal or insulated core options for various security and thermal needs.",
      features: [
        "16-20 gauge steel construction",
        "Impact resistant",
        "Weather stripping available",
        "Multiple glazing options",
        "Wide range of hardware",
        "Rust-resistant coating",
      ],
      applications: "Industrial facilities, warehouses, parking structures",
    },
    {
      category: "Clean Room Doors",
      rating: "ISO Class 5-8",
      description:
        "Precision-engineered doors for controlled environments. Features flush surfaces, airtight seals, and non-particle-shedding materials.",
      features: [
        "ISO 14644-1 compliant",
        "Flush panel design",
        "Continuous hinge options",
        "Airtight gasket seals",
        "Smooth, cleanable surfaces",
        "Vision panels with edge sealing",
      ],
      applications:
        "Pharmaceutical manufacturing, biotech labs, electronics assembly",
    },
    {
      category: "Acoustic Doors",
      rating: "STC 45-55",
      description:
        "High-performance sound-blocking doors for noise-sensitive environments. Multi-layer construction with specialized sealing systems.",
      features: [
        "Sound ratings: STC 45 to STC 55",
        "Multi-point locking systems",
        "Perimeter seals and drop seals",
        "Heavy-duty construction",
        "Adjustable threshold",
        "Fire rating options available",
      ],
      applications: "Recording studios, theaters, hospitals, hotels",
    },
    {
      category: "Blast Resistant Doors",
      rating: "Blast Certified",
      description:
        "Engineered to withstand explosive forces while maintaining structural integrity. Ideal for high-security facilities.",
      features: [
        "Tested to GSA/ISC standards",
        "Multiple threat level ratings",
        "Reinforced steel construction",
        "Anti-blast locking systems",
        "Quick egress capability",
        "Ballistic rating options",
      ],
      applications:
        "Government facilities, embassies, data centers, military bases",
    },
    {
      category: "Bullet Resistant Doors",
      rating: "UL 752 Levels 1-8",
      description:
        "Ballistic-rated doors providing protection against various firearm threats. Available in multiple security levels.",
      features: [
        "UL 752 certified protection",
        "Levels 1-8 available",
        "Steel and composite construction",
        "Vision panels with ballistic glass",
        "Pass-through options",
        "Fire rating integration possible",
      ],
      applications: "Banks, courthouses, police stations, security checkpoints",
    },
    {
      category: "Cold Storage Doors",
      rating: "-40°F to +40°F",
      description:
        "Insulated doors designed for temperature-controlled environments. Features thermal break technology and heavy-duty hinges.",
      features: [
        "High R-value insulation",
        "Thermal break frames",
        "Heated vision windows available",
        "Low-temperature rated hardware",
        "Safety release mechanisms",
        "Corrosion-resistant finishes",
      ],
      applications:
        "Food processing, pharmaceutical storage, research facilities",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Product Range</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive fire and security door solutions for every application
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:flex`}
              >
                <div className="lg:w-2/5 overflow-hidden">
                  <img
                    src={
                      index === 0
                        ? "https://5.imimg.com/data5/SELLER/Default/2024/6/431165275/LG/AU/ZF/45849736/non-fire-rated-steel-door.jpg"
                        : index === 1
                          ? "https://www.bhawanifire.com/bhawain-img/wooden-fire-1.png"
                          : index === 2
                            ? "https://cpimg.tistatic.com/7266444/b/1/lead-lined-door.jpg"
                            : index === 3
                              ? "https://ahlada.com/wp-content/uploads/2023/11/commercial-product-img-02-1.jpg"
                              : index === 4
                                ? "https://www.steengipharm.com/wp-content/uploads/2022/11/DSC_02632-cut-1-1024x889.png"
                                : `https://www.sourcesplash.com/i/random?q=door-${index + 1}`
                    }
                    alt={product.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-10">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {product.category}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-orange-600 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700">
                      <span className="text-orange-600">
                        Typical Applications:
                      </span>{" "}
                      {product.applications}
                    </p>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                      Request Quote
                    </button>
                    <button className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
                      Download Specs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-gradient-to-br from-orange-900 to-red-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our engineering team can design and manufacture doors to meet your
            specific requirements
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Speak with an Engineer
          </button>
        </div>
      </section>
    </div>
  );
}
