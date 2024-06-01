"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  const handleMenuIconClickEvent = () => {
    const mobile_menus = document.querySelector(".mobile-menus") as HTMLUListElement;
    // Toggle the "active-menu" class on the mobile menu
    mobile_menus.classList.toggle("active-menu");
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const mobile_menus = document.querySelector(".mobile-menus") as HTMLUListElement;
      const menu_icon = document.querySelector(".menu-icon") as HTMLElement;

      // Check if the clicked element is not the menu icon or a descendant of the mobile menu
      if (!menu_icon.contains(e.target as Node)) {
        // Remove the "active-menu" class from the mobile menu
        mobile_menus.classList.remove("active-menu");
      }
    });
  }, []);

  return (
    <>
      <header className="w-full  h-[65px] sticky top-0 mx-auto  z-[100] bg-[#3131311f] dark:bg-[#faf8f91f]">
        <nav className="navbar container backdrop-blur-md mx-auto ">
          <div className="navbar-start">
            <div className="navbar-icon">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <Image
                  src={"/menu.png"}
                  height={40}
                  width={40}
                  alt="menu icon"
                  className="w-5 h-5 rotate-180 dark:invert opacity-80 menu-icon"
                  onClick={handleMenuIconClickEvent}
                />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg> */}
              </div>
            </div>
            <Link href="/">Logo</Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal *:mx-5">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/#team-members">Team Members</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </div>

          <div className="navbar-end">
            <Link
              href="/donate"
              className="donate_us_btn relative  px-4 py-2 border dark:border-white border-black rounded-md"
            >
              Donate Us
            </Link>
          </div>
        </nav>
        {/* mobile menus */}
        <div className="w-full mobile-menus  justify-center items-center z-[1000] flex lg:hidden">
          <ul
            tabIndex={0}
            className="mt-2.5 w-[95%]  h-auto px-5 backdrop-blur-md p-2 *:py-3 shadow bg-[#3131311f] dark:bg-[#faf8f91f] rounded-box flex flex-col *:w-full"
          >
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/projects">Projects</Link>
            <Link href="#team-members">Team Members</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
