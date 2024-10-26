import React from 'react';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  full?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, type, disabled, full, onClick }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      if (disabled || !onClick) return;
      onClick(event);
    };

    return (
      <button
        ref={ref}
        type={type || 'button'}
        className={`h-14 rounded-lg bg-primaryBlack text-body4 text-primaryWhite disabled:bg-mediumGray disabled:text-primaryBlack sm:h-20 ${
          full ? 'w-full' : 'w-1/2'
        } ${
          disabled ? 'disabled:bg-mediumGray disabled:text-primaryBlack' : ''
        }`}
        disabled={disabled}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  },
);

export default Button;
