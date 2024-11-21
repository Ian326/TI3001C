import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { handleClick } from '../../hooks/handleClick';

let setMobileOpen; // Declare this so it can be updated within the component.

const handleDrawerToggle = () => {
    if (setMobileOpen) {
        setMobileOpen((prev) => !prev);
    }
};

const DrawerJSX = ({ sections, activeSection }) => {
    const [mobileOpen, setOpenState] = React.useState(false);
    setMobileOpen = setOpenState; // Update the outer `setMobileOpen` reference.

    const handleDrawerClose = () => {
        setOpenState(false);
    };


    return (
        <div>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                <div className="flex flex-col p-2 pt-8" id="navegacion">
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
            </Drawer>
        </div>
    );
};

export { DrawerJSX, handleDrawerToggle };