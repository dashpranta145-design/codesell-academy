import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import FloatingBackground from "./FloatingBackground";
import { MailIcon, PhoneIcon, LocationMarkerIcon } from "./Icons/Icons";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - Replace with your actual API endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  // Function to navigate to FAQ section on homepage
  const handleFAQClick = () => {
    // Navigate to home page first
    navigate("/");

    // Wait for navigation to complete, then scroll to FAQ section
    setTimeout(() => {
      const faqSection = document.getElementById("faq-section");
      if (faqSection) {
        faqSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="bg-black min-h-screen relative">
      <FloatingBackground />
      <Header />

      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Have questions about our courses? Want to start your learning
              journey? We're here to help! Reach out and let's discuss your
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Contact Cards */}
              <div className="bg-gray-900 border-2 border-cyan-500/40 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg shadow-cyan-500/10">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4 group cursor-pointer hover:translate-x-2 transition-transform">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors border border-cyan-500/30">
                      <MailIcon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-base sm:text-lg">
                        Email Us
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                        codesellacademy@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4 group cursor-pointer hover:translate-x-2 transition-transform">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors border border-cyan-500/30">
                      <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-base sm:text-lg">
                        Call Us
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        +880-1876675145
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3 sm:gap-4 group cursor-pointer hover:translate-x-2 transition-transform">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors border border-cyan-500/30">
                      <LocationMarkerIcon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-base sm:text-lg">
                        Visit Us
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Bhairab Bazar, Bhairab, Kishoreganj
                        <br />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-900 border-2 border-purple-500/40 rounded-2xl p-5 sm:p-6 shadow-lg shadow-purple-500/10">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-gray-200 font-medium text-sm sm:text-base">
                      Saturday - Thursday
                    </span>
                    <span className="text-cyan-400 font-semibold text-sm sm:text-base">
                      12:00 PM - 6:00 PM
                    </span>
                  </div>
                  <div className="h-px bg-gray-700"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-gray-200 font-medium text-sm sm:text-base">
                      Friday
                    </span>
                    <span className="text-cyan-400 font-semibold text-sm sm:text-base">
                      10:00 AM - 12:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900 border-2 border-pink-500/40 rounded-2xl p-5 sm:p-6 shadow-lg shadow-pink-500/10">
                <h3 className="text-lg sm:text-xl font-bold text-pink-400 mb-3 sm:mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:bg-pink-500/40 hover:scale-110 transition-all border border-pink-500/30"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:bg-pink-500/40 hover:scale-110 transition-all border border-pink-500/30"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:bg-pink-500/40 hover:scale-110 transition-all border border-pink-500/30"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-gray-900 border-2 border-cyan-500/40 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg shadow-cyan-500/10">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6">
                  Send us a Message
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-200 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-200 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="Enter Your Gmail"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-200 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label
                      htmlFor="course"
                      className="block text-sm font-semibold text-gray-200 mb-2"
                    >
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      <option value="" className="bg-gray-800">
                        Select a course
                      </option>
                      <option value="web-development" className="bg-gray-800">
                        Web Development
                      </option>
                      <option value="digital-marketing" className="bg-gray-800">
                        Digital Marketing
                      </option>
                      <option value="data-science" className="bg-gray-800">
                        Data Science
                      </option>
                      <option
                        value="computer-fundamental"
                        className="bg-gray-800"
                      >
                        Computer Fundamental
                      </option>
                      <option value="spoken-english" className="bg-gray-800">
                        Spoken English
                      </option>
                      <option value="programming" className="bg-gray-800">
                        Programming Basics
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-200 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="bg-green-500/20 border-2 border-green-500/50 rounded-lg p-3 sm:p-4 flex items-center gap-3">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-green-400 font-semibold text-sm sm:text-base">
                          Message sent successfully!
                        </p>
                        <p className="text-green-300 text-xs sm:text-sm">
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-gray-900 border-2 border-cyan-500/40 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/10 mb-12 sm:mb-16">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58454.18149334314!2d90.3563!3d24.0484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e43e6d2d1e5d%3A0x5a3b5a5a5a5a5a5a!2sBhairab%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="CodeSell Academy Location"
              ></iframe>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="text-center px-4">
            <p className="text-gray-300 mb-3 sm:mb-4 text-base sm:text-lg">
              Have questions before reaching out?
            </p>
            <button
              onClick={handleFAQClick}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-pink-400 font-semibold transition-colors text-base sm:text-lg cursor-pointer"
            >
              Check our FAQ section
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
