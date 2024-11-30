import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#4a4a4a] fixed z-50 w-full p-6 sm:px-12 ">
      {/* Logo and Home Link */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Devflow"
        />
        <p className="h2-bold font-spaceGrotesk text-dark100 dark:text-light-900 ">
          Dev <span className="text-orange-400">Overflow</span>
        </p>
      </Link>

      Golobal search

      {/* Right Section: Authenticated and Unauthenticated States */}
      <div className="flex items-center gap-4">
        Theme


        MobileNav
        {/* When Signed In */}
        <SignedIn>
          <UserButton
          afterSwitchSessionUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              }
            }}
          />
        </SignedIn>

         

        {/* When Signed Out */}
        <SignedOut>
          <Link
            href="/sign-in"
            className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg"
          >
            Sign In
          </Link>
        </SignedOut>
      </div>


      <div>

      </div>
    </nav>
  );
};

export default Navbar;
