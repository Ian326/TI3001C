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
                    
                    <div className='flex justify-center overflow-x-visible mt-4'>
                        
                        <div className='bg-slate-100 min-h-[360px] min-w-[360px] flex-grow'>
                            <EmbedFigure route='/figure1' />
                        </div>
                        
                        <div className='grid grid-cols-2 grid-rows-2 size-1/2 justify-items-center'>
                            
                            <div className='bg-slate-100 min-h-[180px] min-w-[180px] flex-grow'>
                                <EmbedFigure route='/figure1' />
                            </div>

                            <div className='bg-slate-100 min-h-[180px] min-w-[180px] flex-grow'>
                                <EmbedFigure route='/figure1' />
                            </div>

                            <div className='bg-slate-100 min-h-[180px] min-w-[180px] flex-grow'>
                                <EmbedFigure route='/figure1' />
                            </div>

                            <div className='bg-slate-100 min-h-[180px] min-w-[180px] flex-grow'>
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