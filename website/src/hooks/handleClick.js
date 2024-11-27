const getYOffset = () => {
    // Adjust the offset according to the screen size
    if (window.innerWidth >= 502) {
        return -110;
    }
    return -145;
};

export const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    const yOffset = getYOffset();
    // Calculate the scroll position according to the target element
    const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
};