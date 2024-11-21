const getYOffset = () => {
    if (window.innerWidth >= 768) { // Tailwind's 'md:' breakpoint (768px)
        return -100;
    }
    return -150; // Default for smaller screens
};

export const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    const yOffset = getYOffset(); // Adjust based on your navbar height
    const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
};