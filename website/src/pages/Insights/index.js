import React from "react";
import SidebarJSX from "../../components/common/Sidebar";
import {DrawerJSX, handleDrawerToggle} from "../../components/common/SidebarDrawer";
import { useNavigation } from "../../hooks/useNavigationBar";

const InsightsJSX = () => {

    const { activeSection, sections } = useNavigation();

    return (
        <div className="flex">
            
            <div className="w-1/12">
                
                <SidebarJSX
                    sections={sections}
                    activeSection={activeSection}
                    handleDrawerToggle={handleDrawerToggle} 
                />

            </div>

            <div>
            
                <DrawerJSX
                    sections={sections}
                    activeSection={activeSection}
                />
            
            </div>

            <div className="w-10/12 p-8" id="titulos">
                <section id="h1">
                    
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

                <section id="h2">
                
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

                <section id="h3">

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

                <section id="h4">

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

                <section id="h5">
                    
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

export default InsightsJSX;