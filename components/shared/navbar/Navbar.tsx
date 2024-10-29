import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full p-6 sm:px-12 dark:shadow-none ">

      <Link href={"/"} className="flex items-center gap-1">

      <Image 
      src="public/assets/images/site-logo.svg" 
      width={23}
      height={23}
      alt="Devflow"
      />

      
        </Link>

    </nav>
  );
};

export default Navbar;
