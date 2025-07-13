import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer({ onAboutClick, onProjectClick, onContactClick }) {
  return (
    <footer className="w-full bg-gradient-to-r from-red-600 via-purple-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">monish praveen</h3>
            <p className="text-white/80">
              Building the future of web development
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/monish-dotcom"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">
            © 2025 Monish praveen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
