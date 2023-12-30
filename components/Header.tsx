'use client';

import React from 'react';

// next js imports
import { useRouter } from 'next/navigation';

// extra packages imports
import { twMerge } from 'tailwind-merge';

// components imports
import Button from './Button';

// assets
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

// types 
interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // handle logout
  };

  return (
    <div
      className={twMerge(
        `
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-6
    `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          {/* back button  */}
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          {/* foreword button  */}
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        {/* buttons for mobile screens  */}
        <div className="flex md:hidden gap-x-2 items-center">
          {/* home button  */}
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          {/* search button  */}
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        {/* signup and login buttons  */}
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button onClick={() => {}} className="bg-transparent text-neutral-300 font-medium">
                Sign Up
              </Button>
            </div>
            <div>
              <Button onClick={() => {}} className="bg-white px-6 py-2">
                Log In
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
