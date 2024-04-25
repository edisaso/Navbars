import { useState, useRef } from 'react';
import { IoMdMore } from "react-icons/io";

const DropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

    
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownHoverButton"
        className="text-white  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={toggleDropdown}
      >
       <IoMdMore className="size-7 cursor-pointer hover:bg-slate-600 hover:rounded-sm"/>
       
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownHover"
          className="z-10 absolute top-full mt-1 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-neutral-900"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropMenu;
