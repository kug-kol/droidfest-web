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
        className="lg:hidden text-white focus:outline-none"
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
        className={`${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"} 
        flex md:hidden overflow-hidden transition-opacity ease-in-out duration-500 
        flex-col items-end text-right absolute top-14 right-6 w-fit bg-dark 
        bg-opacity-50 text-light rounded-md px-4 py-4 z-40 text-title !font-normal`}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href={'/'}
              className="pr-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          {navItems.map(({name, href}) => (
            <li key={name}>
              <Link
                href={href}
                className="pr-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              className="px-4 bg-blue text-light"
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
