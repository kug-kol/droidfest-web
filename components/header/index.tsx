import React from "react";
import { BrandLogo } from "@/components/ui/brand/logo";
import Link from "next/link";
import { HamburgerMenu } from "@/components/Hamburgmenu";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between absolute top-0 left-0 w-full px-10 py-4 z-50">
     
      <Link href="/">
        <BrandLogo className="h-8 justify-start" />
      </Link>

      
      <nav className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/team" className="text-white hover:text-gray-300">
              Team
            </Link>
          </li>
          <li>
            <Link href="/workshops" className="text-white hover:text-gray-300">
              Workshops
            </Link>
          </li>
          <li>
            <Link href="/partners" className="text-white hover:text-gray-300">
              For partners
            </Link>
          </li>
          <li>
            <Link href="/speakers" className="text-white hover:text-gray-300">
              For speakers
            </Link>
          </li>
          <li>
            <Link href="#" className="btn-primary">
              Get Tickets
            </Link>
          </li>
        </ul>
      </nav>

      
      <HamburgerMenu />
    </header>
  );
};
