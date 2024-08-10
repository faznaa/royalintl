import React, { useState } from 'react';
import { Transition } from '@headlessui/react';


const MobileNavbar = ({hasScrolled}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { href:'/', label: 'Home' },
    { href:'/about', label: 'About' },
    { href:'/services', label: 'Services' },
    { href:'/contact', label: 'Contact' },
  ]
  return (
    <div className={`block md:hidden flex flex-col ${(isOpen || hasScrolled) ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      <div className="flex items-center justify-between px-4 py-3">
        <a href='/' >
            <img src={`https://www.royalintl.in/wp-content/uploads/2022/03/royal-international-logo-2-2.png`} width={100} height={100} alt='logo1' className=''/>
        </a>
        <div className='flex  gap-x-2'>
        {/* {isAuthenticated && <ProfileMenu />} */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`block  focus:outline-none`}
          >
            <svg
              className={`h-6 w-6 transition-all ${isOpen ? 'transform rotate-45' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {/* Path for the menu icon that will transform */}
              {!isOpen ? (
                // Hamburger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              ) : (
                // X Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                //   d="M6 18L18 6M6 6l12 12"
                d="M12 6v12m6-6H6"
                />
              )}
            </svg>
          </button>

        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className={` px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
            {navigation.map((item) => (<a href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-50">
              {item.label}
            </a>))}

           
           
          </div>
        )}
      </Transition>
    </div>
  );
};

export default MobileNavbar;
