import EmbedFigure from "../../components/common/EmbedFigures";
import SidebarJSX from "../../components/common/Sidebar";
import { DrawerJSX, handleDrawerToggle } from "../../components/common/SidebarDrawer";
import { useNavigation } from "../../hooks/useNavigationBar";
import logo from "../../assets/tdr-logo.png";

const GraphicsJSX = () => {
    const { activeSection, sections } = useNavigation();

    return (
        <div className='flex'>

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
            
            <div className="w-11/12 p-8">
                
                <section id='Costos'>
                    
                    <h1>Costos</h1>
                    
                    <div className='flex flex-wrap mt-4 justify-stretch'>
                        
                        <div className='bg-slate-50 min-h-[360px] min-w-[360px] grow'>
                            <EmbedFigure route='/figure1' />
                        </div>
                        
                        <div className='flex flex-col grow'>
                            
                            <div className='bg-slate-50 min-h-[360px] md:min-h-[225px]'>
                                <EmbedFigure route='/figure1' />
                            </div>

                            <div className='bg-slate-50 min-h-[360px] md:min-h-[225px]'>
                                <EmbedFigure route='/figure1' />
                            </div>

                        </div>
                    
                    </div>

                </section>
            
            </div>
                
        </div>
    );
};

export default GraphicsJSX;