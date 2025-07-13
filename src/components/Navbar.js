import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  onAboutClick,
  onSkillClick,
  onProjectClick,
  onContactClick,
}) {
  const [isMenuopen, setMenuOpen] = useState(false);

  // Optionally, close mobile menu after click
  const handleNavClick = (handler) => {
    handler();
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-red-600 via-purple-500 to-blue-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* logo and brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                  MP
                </span>
              </div>
              <div className="md:block hidden ml-4">
                <span className="text-white font-semibold text-lg">
                  Monish Praveen
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <button
                    onClick={onAboutClick}
                    className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium bg-transparent"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={onSkillClick}
                    className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium bg-transparent"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={onProjectClick}
                    className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium bg-transparent"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={onContactClick}
                    className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium bg-transparent"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile navigation */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuopen)}
                className="text-white hover:text-blue-200 focus:outline-none transition-color duration-200"
              >
                {isMenuopen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuopen && (
          <div className="md:hidden bg-gradient-to-b from-red-600 via-purple to-blue-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => handleNavClick(onAboutClick)}
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md transition-color duration-200 bg-transparent w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick(onSkillClick)}
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md transition-color duration-200 bg-transparent w-full text-left"
              >
                Skill
              </button>
              <button
                onClick={() => handleNavClick(onProjectClick)}
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md transition-color duration-200 bg-transparent w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick(onContactClick)}
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md transition-color duration-200 bg-transparent w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
