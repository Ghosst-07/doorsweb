"use client";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-red-950 to-blue-950 text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            About Bihari Steel Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Leading India in high-precision steel fabrication & endless solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Bihari Steel Solutions Private Limited was incorporated in 2026 with a vision to provide world-class custom metal fabrication, CNC precision engineering, and specialized steel solutions. Our mission is to deliver endless solutions in steel fabrication, from high-security fire doors to electrical cable trays and automotive body parts.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Operating from our advanced centers in Madhubani and Gopalganj, Bihar, we use state-of-the-art fiber laser cutting and automated CNC folding technologies. This enables us to achieve unmatched accuracy and rapid production rates.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to engineering excellence, prompt delivery, and complete compliance with national and international standards has positioned us as a trusted fabrication partner for industrial, commercial, and automotive clients across India.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-3xl font-bold text-red-600 mb-2">100%</h3>
                <p className="text-gray-700 font-semibold">
                  CNC Precision & Accuracy
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-3xl font-bold text-amber-600 mb-2">
                  10,000+
                </h3>
                <p className="text-gray-700 font-semibold">Parts Fabricated</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-3xl font-bold text-red-600 mb-2">200+</h3>
                <p className="text-gray-700 font-semibold">
                  Expert Team Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="w-20 h-20 mb-6 rounded-full overflow-hidden">
                <img
                  src="https://www.sourcesplash.com/i/random?q=target-goal-mission"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver world-class fire protection solutions that save lives
                and protect property, while maintaining the highest standards of
                quality, innovation, and customer service. We strive to be the
                most trusted partner in passive fire protection.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="w-20 h-20 mb-6 rounded-full overflow-hidden">
                <img
                  src="https://www.sourcesplash.com/i/random?q=vision-future-telescope"
                  alt="Vision"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be India's leading fire door manufacturer and passive fire
                protection provider, setting industry standards through
                continuous innovation, sustainable practices, and unwavering
                commitment to safety excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://www.sourcesplash.com/i/random?q=safety-protection-security"
                  alt="Safety"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Safety First
              </h4>
              <p className="text-gray-600">
                Every product designed with maximum safety as the top priority
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://www.sourcesplash.com/i/random?q=quality-excellence-diamond"
                  alt="Quality"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Quality Excellence
              </h4>
              <p className="text-gray-600">
                Uncompromising standards in materials and manufacturing
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://www.sourcesplash.com/i/random?q=innovation-technology-rocket"
                  alt="Innovation"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Innovation
              </h4>
              <p className="text-gray-600">
                Continuously advancing fire protection technology
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://www.sourcesplash.com/i/random?q=trust-integrity-handshake"
                  alt="Integrity"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Integrity
              </h4>
              <p className="text-gray-600">
                Honest, transparent relationships with all stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Indian Businesses Trust Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
            Why Indian Businesses Trust Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Thousands of leading Indian organizations rely on our fire safety solutions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="mb-4">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Made in India Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                100% manufactured in our Bihar facilities with strict quality control, supporting the Make in India initiative while delivering world-class products.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="mb-4">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Local Support & Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pan-India presence with regional offices in all major cities. Quick response time with local technicians available across the country.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="mb-4">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Best Value for Money
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Premium quality at competitive prices. No import duties or international shipping costs. Flexible payment terms for Indian businesses.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="mb-4">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Indian Standards Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All products certified to BIS, NBC, and IS:3614 standards. Expert knowledge of Indian building codes and fire safety regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="mb-4">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1H7.5m5.5 0h3.5l3.5 3.5V17a1 1 0 00-1-1h-2M7.5 16a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Fast Pan-India Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Efficient logistics network covering all Indian states. Average delivery time of 2-3 weeks with real-time tracking and updates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="mb-4">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Emergency Support Available
              </h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 emergency hotline for urgent requirements. Rapid response team for critical installations and repairs across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">
            Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We maintain the highest industry certifications and regularly
            undergo rigorous third-party testing
          </p>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              "ISO 9001:2015",
              "BIS Certified",
              "IS:3614 Standard",
              "NBC Compliant",
              "CE Marked",
              "LEED Certified",
              "ASTM Standards",
              "IFC Compliant",
              "OHSAS Certified",
              "BEE Star Rated",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center border-2 border-red-200"
              >
                <svg className="w-8 h-8 text-red-600 mb-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-semibold text-gray-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
            State-of-the-Art Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Manufacturing Excellence
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    State-of-the-art climate-controlled manufacturing facilities in Madhubani and Gopalganj, Bihar
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    Advanced CNC cutting and precision welding equipment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    Automated powder coating and finishing lines
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    On-site fire testing laboratory
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    Capacity to produce 500+ doors per week
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Quality Control
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    100% inspection of all finished products
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    Materials sourced from BIS-certified suppliers only
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    Regular fire resistance testing every quarter
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    ISO-certified quality management system
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span className="text-gray-600">
                    Traceability of every component and batch
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
