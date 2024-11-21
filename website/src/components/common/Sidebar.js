import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { handleClick } from '../../hooks/handleClick';

const SidebarJSX = ({ sections, activeSection, handleDrawerToggle }) => {

    return (
        <div>

            <div className="hidden md:flex flex-col fixed w-1/12 p-2 pt-8" id="navegacion">
                {sections.map((section) => {
                    const id = section.getAttribute("id");
                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleClick(e, id)}
                            className={`item-title ${activeSection === id ? "activeTitle" : ""}`}
                        >
                            {id}
                        </a>
                    );
                })}
            </div>

            <div className="md:hidden fixed p-2 pt-8 pl-6 aasd">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default SidebarJSX;