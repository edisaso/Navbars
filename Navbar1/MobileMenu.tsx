import React from "react";

interface MenuItem {
    label: string;
    href: string;
}

interface MobileMenuProps {
    visible?: boolean;
    menuItems: MenuItem[]; // Define menuItems prop as an array of MenuItem objects
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible, menuItems }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="bg-black w-56 absolute top-8 left-3 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                    <a key={index} href={item.href} className="px-3 text-center text-white hover:underline">
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MobileMenu;