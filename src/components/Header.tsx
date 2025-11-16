import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon, ChevronDownIcon } from "./Icons/Icons";

interface NavLink {
  name: string;
  href: string;
  dropdown?: NavLink[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Blog",
    href: "/blog/coding",
    dropdown: [
      { name: "Understanding Code", href: "/blog/coding" },
      { name: "Digital Marketing Guide", href: "/blog/digital-marketing" },
      { name: "Spoken English Tips", href: "/blog/spoken-english" },
    ],
  },
  {
    name: "Course",
    href: "/courses",
    dropdown: [
      { name: "Web Development", href: "/courses" },
      { name: "Digital Marketing", href: "/courses" },
      { name: "Data Science", href: "/courses" },
      { name: "Spoken", href: "/courses" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

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

  return (
    <header
      ref={headerRef}
      className="bg-black/80 backdrop-blur-sm text-white p-4 lg:px-8 fixed top-0 left-0 right-0 z-50 shadow-lg shadow-primary/10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <img
              src="/images/CodeSell Logo.png"
              alt="CodeSell Academy Logo"
              className="rounded-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-3xl font-bold bg-gradient-to-r from-cyan-300 to-pink-500 bg-clip-text text-transparent">
              CodeSell Academy
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/dropdown">
              <Link
                to={link.href}
                className="flex items-center gap-1 text-lg font-medium hover:text-primary transition-colors duration-300 py-2"
              >
                {link.name}
              </Link>

              {link.dropdown && (
                <div className="absolute top-full left-0 w-56 pt-2 invisible opacity-0 group-hover/dropdown:visible group-hover/dropdown:opacity-100 transition-all duration-200">
                  <div className="bg-gray-900/95 backdrop-blur-md border border-primary/20 rounded-lg shadow-lg overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-white hover:bg-primary/20 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

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

      <nav
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-screen border-t border-primary/20"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex justify-between items-center">
                <Link
                  to={link.href}
                  className="text-lg font-medium flex-grow py-2"
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <button onClick={() => handleMobileDropdownToggle(link.name)}>
                    <ChevronDownIcon
                      className={`w-6 h-6 transform transition-transform ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {link.dropdown && (
                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === link.name ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2 text-gray-300 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
