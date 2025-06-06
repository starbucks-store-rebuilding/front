import React from 'react';

interface CartIconProps {
  size?: number;
  color?: string;
  cartCount?: number;
}

const CartIcon: React.FC<CartIconProps> = ({
  size = 32,
  color = '#666767',
  cartCount = 0,
}) => {
  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24.4 12.4H10V13.6H24.4V12.4Z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 23.2C10 24.52 11.08 25.6 12.4 25.6C13.72 25.6 14.8 24.52 14.8 23.2C14.8 21.88 13.72 20.8 12.4 20.8C11.08 20.8 10 21.88 10 23.2ZM11.2 23.2C11.2 22.48 11.68 22 12.4 22C13.12 22 13.6 22.48 13.6 23.2C13.6 23.92 13.12 24.4 12.4 24.4C11.68 24.4 11.2 23.92 11.2 23.2Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.6001 23.2C19.6001 24.52 20.6801 25.6 22.0001 25.6C23.3201 25.6 24.4001 24.52 24.4001 23.2C24.4001 21.88 23.3201 20.8 22.0001 20.8C20.6801 20.8 19.6001 21.88 19.6001 23.2ZM20.8002 23.2C20.8002 22.48 21.2802 22 22.0002 22C22.7202 22 23.2002 22.48 23.2002 23.2C23.2002 23.92 22.7202 24.4 22.0002 24.4C21.2802 24.4 20.8002 23.92 20.8002 23.2Z"
          fill={color}
        />
        <path
          d="M23.0799 19.6H11.32L8.07995 8.79998H5.19995V7.59998H9.03995L12.28 18.4H22.1199L24.3999 11.08L25.5999 11.32L23.0799 19.6Z"
          fill={color}
        />
      </svg>

      {cartCount > 0 && (
        <span className="absolute top-0 right-0 transform -translate-y-0 translate-x-1 top-0.5 bg-green text-white text-[11px] font-bold w-5 h-[14.55px] flex items-center justify-center rounded-[12px]">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
