import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { handleClick } from '../../hooks/handleClick';

const SidebarJSX = ({ sections, activeSection, handleDrawerToggle }) => {

    return (
        <div>

            <div className="hidden lg:flex flex-col fixed w-[10%] p-2 pt-8" id="navegacion">
                {sections.map((section) => {
                    const id = section.getAttribute("id");
                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleClick(e, id)}
                            className={`item-title text-ellipsis overflow-hidden ${activeSection === id ? "activeTitle" : ""} lg:text-sm 2xl:text-base`}
                        >
                            {id}
                        </a>
                    );
                })}
            </div>

            <div className="lg:hidden fixed pt-4 pl-4 sm:pl-6">
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