'use client';

import React, { useMemo } from 'react';

// next js imports 
import { usePathname } from 'next/navigation';

// assets
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

// component imports 
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';

// types 
interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {

  // using usePathname hook
  const pathname = usePathname();

  // routes array 
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/'
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search'
      }
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
