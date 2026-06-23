"use client";

import { products } from "@/lib/constants/products";

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Product Range</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Precision-engineered steel fabrication, CNC laser cutting, bending job work, and custom structures
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
                <div className="lg:w-2/5 overflow-hidden bg-gray-100 flex items-center justify-center min-h-[300px]">
                  <img
                    src={product.mainImage}
                    alt={product.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-10">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {product.category}
                  </h3>
                  <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {product.rating}
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-sm">
                        <span className="text-red-600 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700">
                      <span className="text-red-600">
                        Typical Applications:
                      </span>{" "}
                      {product.applications}
                    </p>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                      Request Quote
                    </button>
                    <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition">
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
      <section className="py-20 bg-gradient-to-br from-red-950 to-red-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our engineering team can design and manufacture custom steel products to meet your exact specifications
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Speak with an Engineer
          </button>
        </div>
      </section>
    </div>
  );
}
