import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/ClickOutside";
import { useCartStore } from "@/store/useCartStore"; 

const CartIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const totalCount = useCartStore((state) => state.getTotalCount());

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
        <Link 
           onClick={() => {
                setDropdownOpen(!dropdownOpen);
            }} 
            href="/cart" className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white" >
              {cart.length > 0 && (
                <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-blue-500 rounded-full" style={{top:"-9px",right:"-5px"}}>
                  {totalCount}
                </span> 
              )}

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
    </ClickOutside>
  );
};

export default CartIcon;
