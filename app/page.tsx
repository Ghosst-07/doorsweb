"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Khanna",
      company: "Shapoorji Pallonji Construction",
      text: "Premium Fire Doors has been our go-to supplier for 10+ years. Their quality is unmatched and customer service is exceptional. Every project delivered on time.",
    },
    {
      name: "Dr. Priya Sharma",
      company: "Fortis Healthcare Network",
      text: "We installed 200+ doors across our hospital network. Every single one passed inspection with flying colors. Their team understands healthcare requirements perfectly!",
    },
    {
      name: "Arjun Patel",
      company: "Reliance Industries Ltd",
      text: "The best investment we made for our facilities. The doors are built to last and the team is incredibly knowledgeable. Excellent after-sales support!",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-700 to-red-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.sourcesplash.com/i/random?q=fire-door-safety-industrial"
            alt="Fire Safety Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-700/70 to-red-900/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              India's Leading Fire Safety Brand Since 1995
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Looking for <span className="text-amber-400">Safety Doors?</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 leading-relaxed">
              Comprehensive fire door solutions under passive fire protection.
              Trusted by 5,000+ clients across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-amber-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-300 transition shadow-2xl hover:shadow-amber-400/50 inline-block"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/products"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition inline-block border-2 border-white"
              >
                View Products
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div className="text-center border-r border-white border-opacity-30">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center border-r border-white border-opacity-30">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-sm text-gray-300">Doors Installed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <div className="text-sm text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 font-semibold mb-8">
            TRUSTED BY LEADING INDIAN ORGANIZATIONS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[
              "Healthcare",
              "IT Parks",
              "Education",
              "Government",
              "Hospitality",
            ].map((industry, i) => (
              <div
                key={i}
                className="text-center font-bold text-gray-400 text-lg"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl h-[500px] overflow-hidden shadow-2xl">
                <img
                  src="https://media.istockphoto.com/id/1270325417/photo/factory-workers-checking-quality-of-industrial-metal-parts.jpg?s=612x612&w=0&k=20&c=e-TkhOw_DHw3nZy1I5dyTcDVEZI_vGxSIKd-RLxa9Xo="
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                ABOUT US
              </div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                India's Most Trusted Fire Door Manufacturer
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Since 1995, Premium Fire Doors has been at the forefront of
                passive fire protection in India. We manufacture, test, and
                install the highest quality fire-rated doors that save lives and
                protect property.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art 100,000 sq ft manufacturing facility in
                Maharashtra employs cutting-edge technology and is staffed by
                200+ certified professionals. Every door undergoes rigorous
                testing to exceed Indian and international fire safety
                standards.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <span className="text-3xl mr-3">✓</span>
                  <div>
                    <p className="font-bold text-gray-800">
                      UL & NFPA Certified
                    </p>
                    <p className="text-gray-600 text-sm">All products tested</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-3">✓</span>
                  <div>
                    <p className="font-bold text-gray-800">ISO 9001:2015</p>
                    <p className="text-gray-600 text-sm">Quality assured</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-3">✓</span>
                  <div>
                    <p className="font-bold text-gray-800">24/7 Support</p>
                    <p className="text-gray-600 text-sm">Always available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-3">✓</span>
                  <div>
                    <p className="font-bold text-gray-800">Lifetime Warranty</p>
                    <p className="text-gray-600 text-sm">Peace of mind</p>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="text-orange-600 font-bold text-lg hover:text-orange-700 inline-flex items-center"
              >
                Learn More About Us
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              OUR PRODUCTS
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Comprehensive Fire Door Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From steel fire doors to specialized acoustic and lead-lined
              options, we offer the complete range of safety doors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Steel Fire Rated Doors",
                rating: "60-180 min",
                desc: "Heavy-duty steel construction with superior fire resistance. UL Listed and NFPA certified.",
                image:
                  "https://5.imimg.com/data5/SELLER/Default/2024/6/431165275/LG/AU/ZF/45849736/non-fire-rated-steel-door.jpg",
              },
              {
                name: "Wooden Fire Rated Doors",
                rating: "30-90 min",
                desc: "Elegant wooden designs meeting fire safety standards without compromising aesthetics.",
                image:
                  "https://www.bhawanifire.com/bhawain-img/wooden-fire-1.png",
              },
              {
                name: "Lead Lined Doors",
                rating: "X-Ray Protection",
                desc: "Radiation protection for medical and industrial facilities. Multiple lead equivalency options.",
                image:
                  "https://cpimg.tistatic.com/7266444/b/1/lead-lined-door.jpg",
              },
              {
                name: "General Metal Doors",
                rating: "High Traffic",
                desc: "Durable metal doors designed for commercial and industrial high-traffic applications.",
                image:
                  "https://ahlada.com/wp-content/uploads/2023/11/commercial-product-img-02-1.jpg",
              },
              {
                name: "Clean Room Doors",
                rating: "ISO Certified",
                desc: "Precision-engineered for controlled environments. Pharmaceutical and biotech approved.",
                image:
                  "https://www.steengipharm.com/wp-content/uploads/2022/11/DSC_02632-cut-1-1024x889.png",
              },
              {
                name: "Acoustic Doors",
                rating: "STC 45-55",
                desc: "Superior sound attenuation for studios, hospitals, and noise-sensitive environments.",
                image:
                  "https://www.sourcesplash.com/i/random?q=soundproof-studio-door",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-orange-600 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {product.rating}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.desc}
                  </p>
                  <button className="text-orange-600 font-bold group-hover:text-orange-700 inline-flex items-center">
                    Learn More
                    <span className="ml-2 group-hover:ml-4 transition-all">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-orange-700 hover:to-red-700 transition shadow-xl inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              WHY CHOOSE US
            </div>
            <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Why Choose Premium Fire Doors?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We don't just manufacture doors—we engineer safety solutions that
              protect what matters most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image:
                  "https://www.sourcesplash.com/i/random?q=trophy-award-success",
                title: "Industry Leading",
                desc: "30+ years of excellence and innovation in fire safety",
                number: "01",
                gradient: "from-orange-500 to-red-600",
              },
              {
                image:
                  "https://www.sourcesplash.com/i/random?q=laboratory-testing-quality",
                title: "Rigorously Tested",
                desc: "Every product tested to exceed international standards",
                number: "02",
                gradient: "from-red-500 to-pink-600",
              },
              {
                image:
                  "https://www.sourcesplash.com/i/random?q=delivery-truck-fast",
                title: "Fast Delivery",
                desc: "On-time delivery guaranteed. Average 2-3 week turnaround",
                number: "03",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                image:
                  "https://www.sourcesplash.com/i/random?q=satisfaction-happy-customer",
                title: "99.8% Satisfaction",
                desc: "Our clients rate us 5-stars for quality and service",
                number: "04",
                gradient: "from-yellow-500 to-amber-600",
              },
              {
                image:
                  "https://www.sourcesplash.com/i/random?q=warranty-shield-protection",
                title: "Lifetime Warranty",
                desc: "Comprehensive warranty coverage on all products",
                number: "05",
                gradient: "from-orange-500 to-red-500",
              },
              {
                image:
                  "https://www.sourcesplash.com/i/random?q=technician-installation-professional",
                title: "Expert Installation",
                desc: "Certified technicians ensure proper installation",
                number: "06",
                gradient: "from-red-600 to-orange-600",
              },
              {
                image:
                  "https://www.sourcesplash.com/i/random?q=support-headset-help",
                title: "24/7 Support",
                desc: "Emergency hotline and dedicated customer support",
                number: "07",
                gradient: "from-amber-600 to-yellow-600",
              },
              {
                image:
                  "https://www.sourcesplash.com/i/random?q=eco-green-sustainability",
                title: "Eco-Friendly",
                desc: "Sustainable materials and LEED certified options",
                number: "08",
                gradient: "from-orange-600 to-red-700",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-orange-500 shadow-2xl hover:shadow-orange-500/20"
              >
                {/* Number Badge */}
                <div
                  className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}
                >
                  {feature.number}
                </div>

                {/* Glowing Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl overflow-hidden border-4 border-gray-700 group-hover:border-orange-500 transition-all duration-500 shadow-xl`}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div
                      className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-dashed border-gray-600 group-hover:border-orange-500 opacity-0 group-hover:opacity-100 scale-125 group-hover:scale-150 transition-all duration-700`}
                    ></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">30+</div>
              <div className="text-gray-300 font-semibold">
                Years of Excellence
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30 text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">50K+</div>
              <div className="text-gray-300 font-semibold">
                Doors Installed Nationwide
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">99.8%</div>
              <div className="text-gray-300 font-semibold">
                Customer Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              HOW WE WORK
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Our Streamlined Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to installation, we make fire safety simple and
              hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Free site assessment and expert recommendations for your specific needs",
              },
              {
                step: "02",
                title: "Design & Quote",
                desc: "Custom design solutions with transparent pricing and detailed specifications",
              },
              {
                step: "03",
                title: "Manufacturing",
                desc: "Precision manufacturing with quality checks at every stage of production",
              },
              {
                step: "04",
                title: "Installation",
                desc: "Professional installation by certified technicians with warranty coverage",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition relative"
              >
                <div className="absolute -top-6 left-8 bg-gradient-to-br from-orange-600 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {process.step}
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-orange-700 hover:to-red-700 transition shadow-xl inline-block"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-gray-50 p-12 rounded-2xl shadow-xl">
              <div className="text-6xl mb-6 text-orange-600">"</div>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-xl text-gray-800">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-orange-600">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition ${index === activeTestimonial ? "bg-orange-600 w-8" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center gap-2 text-amber-400 text-3xl mb-4">
              ★★★★★
            </div>
            <p className="text-gray-600 font-semibold">
              Rated 4.9/5 from 2,500+ verified Indian customers
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Certifications & Compliance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "ISO 9001:2015",
              "UL Listed",
              "NFPA Certified",
              "FM Approved",
              "CE Marked",
              "LEED Certified",
              "ASTM Standards",
              "IFC Compliant",
              "OSHA Compliant",
              "Green Guard",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="text-4xl mb-3 text-green-600">✓</div>
                <p className="font-bold text-gray-800 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Enhance Your Fire Safety?
          </h2>
          <p className="text-2xl mb-10 max-w-2xl mx-auto text-gray-200">
            Get a free consultation from our fire safety experts. We'll help you
            choose the perfect solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-300 transition shadow-2xl inline-block"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+912240123456"
              className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition inline-block border-2 border-white"
            >
              Call: +91 22 4012 3456
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
