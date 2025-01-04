import React from "react";
import {BrandLogo} from "@/components/ui/brand/logo";
import Link from "next/link";

const navItems: Array<{
  name: string;
  href: string;
}> = [
  {
    name: 'Team',
    href: '/team'
  },
  {
    name: 'Workshops',
    href: '/workshops'
  },
  {
    name: 'For partners',
    href: '/partners'
  },
  {
    name: 'For speakers',
    href: '/speakers'
  }
]

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between absolute top-0 left-0 w-screen px-10 py-4">
      <Link href={'/'}>
        <BrandLogo className={'h-8 justify-start'}/>
      </Link>
      <nav className={`flex w-full px-2.5`}>
        <ul className="flex w-full gap-10 items-center justify-end">
          {
            navItems.map(({name, href}) => (
              <li key={name}><Link href={href}>{name}</Link></li>
            ))
          }
          <li><Link href={'/tickets'} className={`btn-primary`}>Get Tickets</Link></li>
        </ul>
      </nav>
    </header>
  )
}