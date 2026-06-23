"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your inquiry! Our team will contact you within 24 hours.",
    );
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-800 to-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team of experts. We're here to help with your
            fire safety needs across India.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                    placeholder="Rajesh Kumar"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                    placeholder="ABC Constructions Pvt Ltd"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                    placeholder="rajesh@company.in"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select a project type</option>
                    <option value="new-construction">New Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="replacement">Door Replacement</option>
                    <option value="maintenance">Maintenance/Repair</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Main Office */}
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Offices & Contacts
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Corporate Office Address</p>
                      <p className="text-gray-600">
                        Ward-27, Haziapur, Gopalganj
                        <br />
                        Bihar - 841428
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Registered Office Address</p>
                      <p className="text-gray-600">
                        Kapleshwar Sthan Kharoua, P.S Rahika
                        <br />
                        Madhubani, Bihar - 847238
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">
                        +91 90155 68648
                        <br />
                        +91 94671 88176
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">
                        biharisteelsolutionspvtltd@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Business Hours
                      </p>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="bg-gradient-to-br from-orange-600 to-red-700 p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-3xl font-bold mb-6">Regional Offices</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-lg">North India</p>
                    <p className="text-orange-100">
                      Delhi NCR | Chandigarh | Jaipur
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">South India</p>
                    <p className="text-orange-100">
                      Bangalore | Chennai | Hyderabad
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">West India</p>
                    <p className="text-orange-100">Mumbai | Pune | Ahmedabad</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">East India</p>
                    <p className="text-orange-100">
                      Kolkata | Bhubaneswar | Guwahati
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 border-2 border-red-200 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                  <span className="inline-block w-8 h-8 bg-red-600 rounded-full text-white flex items-center justify-center mr-3 text-lg">
                    !
                  </span>
                  24/7 Emergency Support
                </h3>
                <p className="text-gray-700 mb-4">
                  For urgent door failures or fire safety emergencies, call our
                  24-hour hotline:
                </p>
                <p className="text-3xl font-bold text-red-600">
                  +91 90155 68648
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Visit Our Showroom
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <img
              src="https://www.sourcesplash.com/i/random?q=factory-building-industrial"
              alt="Our Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
