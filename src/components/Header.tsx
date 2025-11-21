import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon, ChevronDownIcon } from "./Icons/Icons";

interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
  dropdown?: NavLink[];
}

// Import icons
import {
  HomeIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
} from "./Icons/Icons";

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    name: "Blog",
    href: "/blog/coding",
    icon: <BookOpenIcon className="w-5 h-5" />,
    dropdown: [
      { name: "Understanding Code", href: "/blog/coding" },
      { name: "Digital Marketing Guide", href: "/blog/digital-marketing" },
      { name: "Spoken English Tips", href: "/blog/spoken-english" },
    ],
  },
  {
    name: "Course",
    href: "/courses",
    icon: <AcademicCapIcon className="w-5 h-5" />,
    dropdown: [
      { name: "Web Development", href: "/courses?course=frontend" },
      { name: "Digital Marketing", href: "/courses?course=digital-marketing" },
      { name: "DSA", href: "/courses?course=dsa-python" },
      { name: "Spoken English", href: "/courses?course=spoken" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
  },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Check if a top-level link is active
  const isLinkActive = (href: string, dropdown?: NavLink[]) => {
    // For home page - only active when exactly "/"
    if (href === "/") {
      return location.pathname === "/";
    }

    // For links with dropdowns, check if any dropdown item is active OR if we're on the parent route
    if (dropdown) {
      const isDropdownItemActive = dropdown.some(
        (item) =>
          location.pathname === item.href ||
          location.pathname.startsWith(item.href + "/")
      );
      const isParentActive =
        location.pathname.startsWith(href + "/") || location.pathname === href;
      return isDropdownItemActive || isParentActive;
    }

    // For regular links, check exact match or starts with (for nested routes)
    return (
      location.pathname === href || location.pathname.startsWith(href + "/")
    );
  };

  // Check if a dropdown item is active
  const isDropdownItemActive = (href: string) => {
    return (
      location.pathname === href || location.pathname.startsWith(href + "/")
    );
  };

  return (
    <header
      ref={headerRef}
      className="bg-black/80 backdrop-blur-sm text-white p-4 lg:px-8 fixed top-0 left-0 right-0 z-50 shadow-lg shadow-primary/10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="w-16 h-20 flex items-center justify-center">
            <img
              src="/images/CodeSell Logo.png"
              alt="CodeSell Academy Logo"
              className="rounded-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-3xl font-bold bg-gradient-to-r from-violet-500 to-pink-300 bg-clip-text text-transparent">
              CodeSell Academy
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href, link.dropdown);

            return (
              <div key={link.name} className="relative group/dropdown">
                <Link
                  to={link.href}
                  className={`flex items-center gap-2 text-lg font-medium transition-all duration-300 py-2 px-3 rounded-lg ${
                    isActive
                      ? "text-white bg-gradient-to-r from-violet-600 to-pink-400 shadow-lg shadow-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.icon}
                  {link.name}
                  {link.dropdown && (
                    <ChevronDownIcon className="w-4 h-4 transition-transform group-hover/dropdown:rotate-180" />
                  )}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 w-56 pt-2 invisible opacity-0 group-hover/dropdown:visible group-hover/dropdown:opacity-100 transition-all duration-200 z-50">
                    <div className="bg-gray-900/95 backdrop-blur-md border border-primary/20 rounded-lg shadow-lg overflow-hidden">
                      {link.dropdown.map((item) => {
                        const isItemActive = isDropdownItemActive(item.href);
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block px-4 py-3 transition-colors duration-200 ${
                              isItemActive
                                ? "bg-violet-600/30 text-white border-l-2 border-violet-400"
                                : "text-gray-300 hover:bg-primary/20 hover:text-white"
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <XIcon className="w-8 h-8 text-primary" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-screen border-t border-primary/20"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href, link.dropdown);

            return (
              <div key={link.name}>
                <div className="flex justify-between items-center">
                  <Link
                    to={link.href}
                    className={`flex items-center gap-3 text-lg font-medium flex-grow py-3 px-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-violet-600 to-pink-400 shadow-lg shadow-purple-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                  </Link>

                  {link.dropdown && (
                    <button
                      onClick={() => handleMobileDropdownToggle(link.name)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ChevronDownIcon
                        className={`w-5 h-5 transform transition-transform ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && (
                  <div
                    className={`pl-8 overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdown === link.name ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {link.dropdown.map((item) => {
                      const isItemActive = isDropdownItemActive(item.href);
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`flex items-center gap-3 py-3 px-3 rounded-lg transition-colors duration-200 ${
                            isItemActive
                              ? "text-white bg-violet-600/30 border-l-2 border-violet-400"
                              : "text-gray-300 hover:text-white hover:bg-white/10"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
