import NavbarItem from "./NavbarItem";
import { useCallback, useEffect, useState } from "react";
import { BsChevronDown } from 'react-icons/bs';
import MobileMenu from "./MobileMenu";


const TOP_OFFSET = 66;  // top offset for scroll


const Navbar = () => {
const [showMobileMenu, setShowMobileMenu] = useState(false);
const [showBackground, setShowBackground] = useState(false);

// Define the items for the mobile menu
const mobileMenuItems = [
    { label: "Home", href: "#home" },
    { label: "Series", href: "#series" },
    { label: "Films", href: "#films" },
    { label: "New & Popular", href: "#new-popular" },
    { label: "My List", href: "#my-list" },
    { label: "Browse by Languages", href: "#browse-languages" },
];

 // Effect hook to handle when scrolled background to appear
useEffect(() => {
    const handleScroll =() => {
        if (window.scrollY >= TOP_OFFSET){
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }

}, []);

 // function to toggle mobile menu visibility
const toggleMobileMenu = useCallback(() => {
setShowMobileMenu((current) => !current);
},[]);



    return (
        <nav className="w-full fixed z-40">
        <div className={`
        px-4
        md:px-16
        py-6
        flex
        flex-row
        items-center
        transition-500
        ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}

        `}>
            <img src="https://i.imgur.com/fAYsH2O.png" alt="Logo" className="h-8 lg:h-14"></img>
            <div className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex
            ">
                <NavbarItem label="Home" href="https://edisaso.com/"/>
                <NavbarItem label="Series"/>
                <NavbarItem label="Films"/>
                <NavbarItem label="New & Popular"/>
                <NavbarItem label="My List"/>
                <NavbarItem label="Browse by Languages"/>
            </div>
            <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-10 cursor-pointer relative">
                <p className="text-white text-sm">Browse</p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                <MobileMenu visible={showMobileMenu} menuItems={mobileMenuItems} />
            </div>


            </div>
        </nav>
    )
}

export default Navbar;