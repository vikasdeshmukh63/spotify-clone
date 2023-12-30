import React, { forwardRef } from 'react';

// extra packages imports
import { twMerge } from 'tailwind-merge';

// types 
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, disabled, type = 'button', ...props }, ref) => {
  return (
    <button
      type={type}
      className={twMerge(
        `
  w-full
  rounded-full
  bg-green-500
  border-transparent
  px-3
  py-3
  disabled:cursor-not-allowed
  disabled:opacity-50
  text-black
  font-bold
  hover:opacity-75
  transition
  `,
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

// setting component name 
Button.displayName = 'Button';

export default Button;
