import React from 'react';

// next js imports 
import Link from 'next/link';

// importing icon type
import { IconType } from 'react-icons';

// extra packages imports
import { twMerge } from 'tailwind-merge';

// types
interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, href, label, active }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
    flex
    flex-row
    h-auto
    items-center
    w-full
    gap-x-4
    text-md
    font-medium
    cursor-pointer
    hover:text-white
    transition
    text-neutral-400
    py-1
    `,
        active && 'text-white'
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
