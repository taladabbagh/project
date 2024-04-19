import React, { useState } from 'react';
import bzuLogo from 'project/src/images/bzuLogo.png';
import bzuLogo2 from 'project/src/images/bzuLogo2.png';


const Navbar = () => {
    // State to manage the active item
    const [activeItem, setActiveItem] = useState('dashboard');
    
    // Function to render a navigation item
    const renderNavItem = (name, icon) => {
        const isActive = activeItem === name;
        return (
            <div
                className={`flex items-center gap-2 p-4 rounded-xl ${isActive ? 'bg-[#01631F]' : ''} text-lg ${isActive ? 'text-[#EEEEEE]' : 'text-[#797979]'}`}
                style={{ height: '44px', borderRadius: '15px', cursor: 'pointer' }}
                onClick={() => setActiveItem(name)}
            >
                <span className={`text-2xl`}>{icon}</span> {/* The icon on the left */}
                <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span> {/* Capitalize name */}
            </div>
        );
    };

    return (
        <div className="w-[201px] bg-[#EEEEEE] flex flex-col justify-between h-screen">
            {/* Top logo */}
            <div className="p-4">
                {/* Replace 'path/to/bzuLogo.png' with the correct path */}
                <img src={bzuLogo} alt="bzuLogo" className="w-20 h-20" /> {/* Set width and height to 80x80 */}
            </div>

            {/* Navigation items */}
            <div className="flex flex-col mt-8">
                {renderNavItem('dashboard', '🏠')} {/* House icon for dashboard */}
                <div className="my-15" /> {/* Space between items */}
                {renderNavItem('chats', '💬')} {/* Chat icon for chats */}
                <div className="my-15" /> {/* Space between items */}
                {renderNavItem('settings', '⚙️')} {/* Gear icon for settings */}
            </div>

            {/* Bottom logo */}
            <div className="p-4">
                {/* Replace 'path/to/bzuLogo2.png' with the correct path */}
                <img src={bzuLogo2} alt="bzuLogo2" className="w-[184.56px] h-[62px]" /> {/* Set width and height to 184.56x62 */}
            </div>
        </div>
    );
};

export default Navbar;
