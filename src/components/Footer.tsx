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
            <h2 className="font-serif text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-300  bg-clip-text text-transparent">
              CodeSell Academy
            </h2>{" "}
            <br />
            <p className="text-gray-200 leading-relaxed">
              We are dedicated to providing accessible, high-quality education
              in the most in-demand tech fields. Our mission is to empower
              learners to launch and advance their careers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-primary" />
                codesellacademy <br />
                @gmail.com
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-primary" />
                +880 1876675145
              </li>
              <li className="flex items-center gap-3">
                <LocationMarkerIcon className="w-5 h-5 text-primary" />
                <span>Bhairab, Kishoreganj</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="blog/coding"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/Courses"
                  className="hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-primary transition-colors"
                >
                  About US
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Connect With Us
            </h2>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/CodeSellContentHub"
                aria-label="Facebook"
                className="text-gray-400 hover:text-primary transition-transform hover:scale-110"
              >
                <FacebookIcon className="w-7 h-7" />
              </a>
              <a
                href="https://x.com/CodesellAcademy"
                aria-label="twiter"
                className="text-gray-400 hover:text-primary transition-transform hover:scale-110"
              >
                <TwitterIcon className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/codesell-academy"
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
