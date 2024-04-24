import React from "react";

interface NavbarItemProps {
    label: string;
    href?: string; 
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href }) => {
    // If href is provided, render an anchor tag with href attribute
    if (href) {
        return (
            <a href={href} className="text-white cursor-pointer hover:text-gray-300 transition">
                {label}
            </a>
        );
    }

    // If href is not provided, render a div as before
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            {label}
        </div>
    );
};

export default NavbarItem;