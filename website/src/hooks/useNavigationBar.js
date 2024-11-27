import { useEffect, useState } from "react";

export const useNavigation = () => {
    const [activeSection, setActiveSection] = useState("");
    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Select all sections dynamically when the component mounts
        const allSections = Array.from(document.querySelectorAll("section"));
        setSections(allSections);

        // Set the active section to the first element of allSections
        if (allSections.length > 0) {
            setActiveSection(allSections[0].getAttribute("id"));
        }

        // Function to handle scroll event (To highlight the active section)
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            allSections.forEach((section) => {
                const offsetTop = section.offsetTop - 330;
                const offsetHeight = section.offsetHeight;
                const id = section.getAttribute("id");

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveSection(id);
                }
            });
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { activeSection, sections };
};