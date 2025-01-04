"use client";

import React, { useState } from "react";
import { BrandLogo } from "@/components/ui/brand/logo";
import Link from "next/link";

const navItems: Array<{
  name: string;
  href: string;
}> = [
  {
    name: "Team",
    href: "/team",
  },
  {
    name: "Workshops",
    href: "/workshops",
  },
  {
    name: "For partners",
    href: "/partners",
  },
  {
    name: "For speakers",
    href: "/speakers",
  },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between absolute top-0 left-0 w-full px-10 py-4 z-50">
      
      <Link href="/">
        <BrandLogo className="h-8 justify-start" />
      </Link>

      
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
        } md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-transparent md:bg-transparent px-10 md:px-0`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center">
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
              href="/tickets"
              className="btn-primary"
              onClick={() => setIsMenuOpen(false)} 
            >
              Get Tickets
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
