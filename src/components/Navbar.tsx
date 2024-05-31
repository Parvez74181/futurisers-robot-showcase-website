import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="w-full h-[70px] absolute mx-auto  bg-[#faf8f91f]">
        <nav className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown ">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-4 z-[1] p-2 *:py-3 shadow bg-[#faf8f91f] rounded-box flex "
              >
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/projects">projects</Link>
                <Link href="#team-members">Team Members</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </ul>
            </div>
            <Link href="">Logo</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal *:mx-5">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/projects">projects</Link>
              <Link href="#team-members">Team Members</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </div>
          <div className="navbar-end">
            <Link href="/donate" className="donate_us_btn relative  px-4 py-2 border rounded-md">
              Donate Us
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
