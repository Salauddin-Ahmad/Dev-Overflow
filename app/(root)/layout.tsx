import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <main className="background_light850_dark100 relative">
      <Navbar/>
      <div className="flex">
        
        Left

        <section className="flex max-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">
            {children}
          </div>
        </section>

        Right

      </div>

      Toaster
    </main>
  );
};

export default Layout;
