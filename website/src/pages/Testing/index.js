import React, { useEffect, useState } from "react";

const TestingJSX = () => {
  const [activeSection, setActiveSection] = useState("h1");
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Select all sections dynamically when the component mounts
    const allSections = Array.from(document.querySelectorAll("section"));
    setSections(allSections);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      allSections.forEach((section) => {
        const offsetTop = section.offsetTop;
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

  return (
    <div className="flex">
      <div className="flex flex-col w-1/12 p-2 pt-8 fixed" id="navegacion">
        {sections.map((section) => {
          const id = section.getAttribute("id");
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`item-title ${activeSection === id ? "active" : ""}`}
            >
              {id}
            </a>
          );
        })}
      </div>
      <div className="w-1/12"></div>

      <div className="w-10/12 p-8" id="titulos">
        <section className="testingSection" id="h1">
          <h1>Heading1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc
            auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus.
            Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum
            erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis
            condimentum augue id magna semper rutrum. Nullam justo enim,
            consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede
            metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
            Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus.
            Integer pellentesque quam vel velit. Duis pulvinar. Nam quis nulla.
            Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel
            lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis
            quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper
            pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.
            Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus
            sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit. Morbi gravida libero nec
            velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum
            vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo.
            Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo
            accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper
            ultricies, lacus quam ultricies odio, vitae placerat pede sem sit
            amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui
            leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel
            massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque
            libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum
            massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse
            nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec,
            pretium sit amet, tempor quis, urna. Nam quis nulla. Integer
            malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus.
            Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.
            Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar.
            Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non
            arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl
            molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat.
          </p>
        </section>

        <section className="testingSection" id="h2">
          <h1>Heading2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc
            auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus.
            Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum
            erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis
            condimentum augue id magna semper rutrum. Nullam justo enim,
            consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede
            metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
            Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus.
            Integer pellentesque quam vel velit. Duis pulvinar. Nam quis nulla.
            Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel
            lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis
            quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper
            pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.
            Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus
            sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit. Morbi gravida libero nec
            velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum
            vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo.
            Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo
            accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper
            ultricies, lacus quam ultricies odio, vitae placerat pede sem sit
            amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui
            leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel
            massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque
            libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum
            massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse
            nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec,
            pretium sit amet, tempor quis, urna. Nam quis nulla. Integer
            malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus.
            Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.
            Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar.
            Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non
            arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl
            molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat.
          </p>
        </section>

        <section className="testingSection" id="h3">
          <h1>Heading3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc
            auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus.
            Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum
            erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis
            condimentum augue id magna semper rutrum. Nullam justo enim,
            consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede
            metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
            Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus.
            Integer pellentesque quam vel velit. Duis pulvinar. Nam quis nulla.
            Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel
            lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis
            quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper
            pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.
            Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus
            sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit. Morbi gravida libero nec
            velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum
            vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo.
            Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo
            accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper
            ultricies, lacus quam ultricies odio, vitae placerat pede sem sit
            amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui
            leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel
            massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque
            libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum
            massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse
            nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec,
            pretium sit amet, tempor quis, urna. Nam quis nulla. Integer
            malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus.
            Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.
            Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar.
            Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non
            arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl
            molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat.
          </p>
        </section>

        <section className="testingSection" id="h4">
          <h1>Heading4</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc
            auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus.
            Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum
            erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis
            condimentum augue id magna semper rutrum. Nullam justo enim,
            consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede
            metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
            Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus.
            Integer pellentesque quam vel velit. Duis pulvinar. Nam quis nulla.
            Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel
            lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis
            quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper
            pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.
            Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus
            sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit. Morbi gravida libero nec
            velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum
            vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo.
            Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo
            accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper
            ultricies, lacus quam ultricies odio, vitae placerat pede sem sit
            amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui
            leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel
            massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque
            libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum
            massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse
            nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec,
            pretium sit amet, tempor quis, urna. Nam quis nulla. Integer
            malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus.
            Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.
            Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar.
            Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non
            arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl
            molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat.
          </p>
        </section>

        <section className="testingSection" id="h5">
          <h1>Heading5</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc
            auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus.
            Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum
            erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis
            condimentum augue id magna semper rutrum. Nullam justo enim,
            consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede
            metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
            Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus.
            Integer pellentesque quam vel velit. Duis pulvinar. Nam quis nulla.
            Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel
            lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis
            quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper
            pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.
            Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus
            sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit. Morbi gravida libero nec
            velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum
            vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo.
            Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo
            accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper
            ultricies, lacus quam ultricies odio, vitae placerat pede sem sit
            amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui
            leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel
            massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque
            libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum
            massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse
            nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec,
            pretium sit amet, tempor quis, urna. Nam quis nulla. Integer
            malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus.
            Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.
            Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar.
            Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non
            arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl
            molestie malesuada. Proin in tellus sit amet nibh dignissim
            sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam
            rhoncus aliquam metus. Etiam egestas wisi a erat.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TestingJSX;
