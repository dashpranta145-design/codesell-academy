import React from "react";
import { Link } from "react-router-dom";
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "./Icons/Icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="font-serif text-xl font-bold bg-gradient-to-r from-pink-500 to-cyan-300  bg-clip-text text-transparent">
              CodeSell Academy
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We are dedicated to providing accessible, high-quality education
              in the most in-demand tech fields. Our mission is to empower
              learners to launch and advance their careers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact@codesell.academy"
                  className="hover:text-primary transition-colors"
                >
                  codesellacademy <br />
                  @gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +880 1876675145
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LocationMarkerIcon className="w-5 h-5 text-primary" />
                <span>Bhairab, Kishoreganj</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/Courses"
                  className="hover:text-primary transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Apply Now →
                </Link>
              </li>
              <li>
                <a
                  href="/blog/coding"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">
              Connect With Us
            </h2>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-primary transition-transform hover:scale-110"
              >
                <FacebookIcon className="w-7 h-7" />
              </a>
              <a
                href="#"
                aria-label="twiter"
                className="text-gray-400 hover:text-primary transition-transform hover:scale-110"
              >
                <TwitterIcon className="w-7 h-7" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-primary transition-transform hover:scale-110"
              >
                <LinkedinIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 text-center pt-8">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} CodeSell Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
