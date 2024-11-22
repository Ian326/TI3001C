import React from 'react';
import Drawer from '@mui/material/Drawer';
import { handleClick } from '../../hooks/handleClick';
import logo from "../../assets/tdr-logo.png";

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
                <div className="grid flex-col p-2 pt-8" id="navegacion">
                    <div className='flex justify-center w-full pb-2 mb-4  border-b-[1px] border-slate-950'>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="focus:outline-none justify-self-center "
                        >
                            <img className="h-[64px]" src={logo} alt="TDR_logo" />
                        </button>
                    </div>
                    
                    <h2 className='underline mb-2'>Secciones</h2>

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