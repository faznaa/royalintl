import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MobileNavbar from "../MobileNavbar";
const NavbarItem = (props: any) => {
  const { isWhiteTheme, ..._props } = props;
  return (
    <Link
    to={props.href}
      {..._props}
      className="relative group py-2 my-5 mx-3 inline-block transition duration-300"
    >
      {_props.children}
      <div
        className={`block h-[1px] w-full opacity-0 ${
          isWhiteTheme ? "bg-black" : "bg-white"
        } transition-opacity duration-500 group-hover:opacity-100 absolute left-0 bottom-0`}
      />
    </Link>
  );
};

const Navbar = ({ isWhiteTheme = false }: any) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navigation = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
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

      <div className="hidden md:block mx-auto lg:mx-16 px-4">
        <div className="flex justify-start items-center">
          <div className="flex justify-start items-center space-x-4">
            <Link to="/" className="pt-2">
              {/* Website Logo */}
              <img
                src="https://www.royalintl.in/wp-content/uploads/2022/03/royal-international-logo-2-2.png"
                width={100}
                height={100}
                alt="logo1"
                className="w-32"
              />
            </Link>
          </div>
          <div className="w-full flex justify-center mr-32">
            <div className="hidden md:flex items-center justify-between space-x-1 gap-x-4">
              {navigation.map((item) => (
                <NavbarItem
                  key={item.to}
                  isWhiteTheme={isWhiteTheme}
                  to={item.to}
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
