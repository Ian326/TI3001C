import React from 'react';
import { handleClick } from '../../hooks/handleClick';

const SidebarJSX = ({ sections, activeSection }) => {
    return (
        <div className="fixed flex flex-col w-1/12 p-2 pt-8" id="navegacion">
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
    );
};

export default SidebarJSX;