import React, { useState } from 'react';
import bzuLogo from '../images/bzuLogo.png';
import bzuLogo2 from '../images/bzuLogo2.png';
import dashboardIcon from '../images/dashboard.svg'; // Import dashboard icon
import chatsIcon from '../images/chat.svg'; // Import chats icon
import settingsIcon from '../images/settings.svg'; // Import settings icon


const Navbar = () => {
    // State to manage the active item
    const [activeItem, setActiveItem] = useState('dashboard');

    // Function to render a navigation item
    const renderNavItem = (name, path, iconSrc) => {
        const isActive = activeItem === name;
        return (
            <div
                className={`flex items-center gap-2 p-4 rounded-xl ${isActive ? 'bg-[#01631F]' : ''} text-lg ${isActive ? 'text-[#EEEEEE]' : 'text-[#797979]'} font-lato`}
                style={{ height: '44px', borderRadius: '15px', cursor: 'pointer' }}
                onClick={() => setActiveItem(name)}
            >
                <img src={iconSrc} alt={name} className="h-6 w-6" /> {/* Set icon size */}
                <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span> {/* Capitalize name */}
            </div>
        );
    };

    return (
        <div className="w-[201px] bg-[#EEEEEE] flex flex-col justify-between h-screen">
            {/* Top logo */}
            <div className="flex justify-center p-4 mb-[65px]">
                <img src={bzuLogo} alt="bzuLogo" className="w-20 h-20" /> {/* Set width and height to 80x80 */}
            </div>

            {/* Navigation items */}
            <div className="flex flex-col">
                {/* Render the navigation items with 60px margin-bottom except for the last one */}
                <div className="mb-5">{renderNavItem('dashboard', 'dashboard', dashboardIcon)}</div>
                <div className="mb-5">{renderNavItem('chats', 'chats', chatsIcon)}</div>
                {renderNavItem('settings', 'settings', settingsIcon)} {/* No margin-bottom on the last item */}
            </div>

            {/* Bottom logo */}
            <div className="flex justify-center p-4">
                <img src={bzuLogo2} alt="bzuLogo2" className="w-[184.56px] h-[62px]" /> {/* Set width and height to 184.56x62 */}
            </div>
        </div>
    );
};

export default Navbar;