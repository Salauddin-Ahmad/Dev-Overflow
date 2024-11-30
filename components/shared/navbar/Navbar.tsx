// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// const Navbar = () => {
//   return (
//     <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full p-6 sm:px-12 dark:shadow-none">
//       {/* Logo and Home Link */}
//       <Link href={"/"} className="flex items-center gap-1">
//         <Image
//           src="puf/assets/images/site-logo.svg"
//           width={23}
//           height={23}
//           alt="Devflow"
//         />
//         <p>
//           {" "}
//           Dev <span className="text-primary-500">Overflow</span>{" "}
//         </p>
//       </Link>

//       {/* Right Section: Authenticated and Unauthenticated States */}
//       <div className="flex items-center gap-4">
//         {/* When Signed In */}
//         <SignedIn>
//           <UserButton
//             afterSignOutUrl="/"
//             appearance={{
//               elements: {
//                 avatarBox: "h-10 w-10",
//               },
//             }}
//           />
//         </SignedIn>

//         {/* When Signed Out */}
//         <SignedOut>
//           <Link
//             href="/sign-in"
//             className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg"
//           >
//             Sign In
//           </Link>
//         </SignedOut>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center background-light900_dark200 shadow-light-300 fixed z-50 w-full p-6 sm:px-12 dark:shadow-none">
      {/* Logo and Home Link */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Devflow"
        />
        <p className="text-lg font-bold">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      {/* Right Section: Authenticated and Unauthenticated States */}
      <div className="flex items-center gap-4">
        {/* When Signed In */}
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
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
    </nav>
  );
};

export default Navbar;
