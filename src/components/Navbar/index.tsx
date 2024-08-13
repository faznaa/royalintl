// components/Navbar.js

import { useContext, useEffect, useState } from "react";
import MobileNavbar from "../MobileNavbar";
// import { Link } from "react-router-dom";
const NavbarItem = (props: any) => {
  const { isWhiteTheme, ..._props } = props;
  return (
    <a
      {..._props}
      className="relative group py-2 my-5 mx-3 inline-block transition duration-300"
    >
      {_props.children}
      <div
        className={`block  h-[1px]  w-full opacity-0 ${
          isWhiteTheme ? "bg-black" : "bg-white"
        } transition-opacity duration-500 group-hover:opacity-100 absolute left-0 bottom-0`}
      />
    </a>
  );
};

const Navbar = ({ isWhiteTheme = false }: any) => {
  //   const { isAuthenticated } = useAuth()
  //   const { setOpenLogin, setOpenRegister } = useAuthModalHook()
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 0);
    };

    // add scroll event listener when the component is mounted
    window.addEventListener("scroll", handleScroll);

    // clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigation = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-30 transition-colors duration-300 ${
        hasScrolled || isWhiteTheme
          ? "bg-black text-gray-200 hover:text-white shadow-lg z-50"
          : "bg-black/30 text-white"
      }`}
    >
      <MobileNavbar hasScrolled={hasScrolled || isWhiteTheme} />

      <div className="hidden md:block  mx-auto lg:mx-16 px-4">
        <div className="flex justify-start items-center">
          <div className="flex justify-start items-center space-x-4">
            <a href="/" className="pt-2 ">
              {/* Website Logo */}
              {hasScrolled || isWhiteTheme ? (
                <img
                  src="https://www.royalintl.in/wp-content/uploads/2022/03/royal-international-logo-2-2.png"
                  width={100}
                  height={100}
                  alt="logo1"
                  className="w-32"
                />
              ) : (
                <img
                  src="https://www.royalintl.in/wp-content/uploads/2022/03/royal-international-logo-2-2.png"
                  width={100}
                  height={100}
                  alt="logo1"
                  className="w-32"
                />
              )}
            </a>
          </div>
         <div className="w-full flex justify-center mr-32">
         <div className="hidden md:flex items-center justify-between space-x-1 gap-x-4 ">
            {navigation.map((item) => (
              <NavbarItem
                key={item.href}
                isWhiteTheme={isWhiteTheme}
                href={item.href}
              >
                {item.label}
              </NavbarItem>
            ))}
          </div>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
