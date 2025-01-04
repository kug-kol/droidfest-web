"use client";

import React, { useState } from "react";
import Link from "next/link";

const navItems: Array<{
  name: string;
  href: string;
}> = [
  { name: "Team", href: "/team" },
  { name: "Workshops", href: "/workshops" },
  { name: "For partners", href: "/partners" },
  { name: "For speakers", href: "/speakers" },
];

export const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Navigation"
      >
        <div className="space-y-1">
          <span
            className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>

      
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-start absolute top-16 left-0 w-full bg-transparent px-10 py-4 z-40`}
      >
        <ul className="flex flex-col gap-4">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className="text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              className="btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Tickets
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
