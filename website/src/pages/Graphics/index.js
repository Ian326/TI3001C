import EmbedFigure from "../../components/common/EmbedFigures";
import SidebarJSX from "../../components/common/Sidebar";
import { DrawerJSX, handleDrawerToggle } from "../../components/common/SidebarDrawer";
import { useNavigation } from "../../hooks/useNavigationBar";

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
                
                <section id='Reparaciones'>
                    
                    <h1>Reparaciones</h1>
                    
                    <div className='flex flex-col justify-center bg-slate-50'>
                        <div className='flex justify-center flex-wrap mt-4'>
                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figure3' />
                                </div>
                            </div>
                            

                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <div className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure4' />
                            </div>

                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <div className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure5' />
                            </div>

                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <div className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure6' />
                            </div>

                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <div className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure7' />
                            </div>

                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <div className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren2' />
                            </div>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <div className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren10' />
                            </div>
                        </div>
                    </div>

                </section>


                <section id='MTBF'>

                    <h1>MTBF</h1>

                    <div className='flex flex-col justify-center bg-slate-50'>
                        <div className='flex justify-center flex-wrap mt-4'>

                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren3' />
                                </div>
                            </div>

                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren4' />
                                </div>
                            </div>

                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren5' />
                                </div>
                            </div>

                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren6' />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='Costos'>

                    <h1>Costos</h1>

                    <div className='flex flex-col justify-center bg-slate-50'>
                        <div className='flex justify-center flex-wrap mt-4'>
                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren7' />
                                </div>
                            </div>
                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren11' />
                                </div>
                            </div>
                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren1' />
                                </div>
                            </div>

                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren12' />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='Freq. Mant.'>

                    <h1>Frecuencias de Mantenimiento</h1>

                    <div className='flex flex-col justify-center bg-slate-50'>
                        <div className='flex justify-center flex-wrap mt-4'>

                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren8' />
                                </div>
                            </div>

                            <div className='flex justify-center w-10/12'>
                                <div className='min-h-[360px] min-w-[360px] grow'>
                                    <EmbedFigure route='/figuren9' />
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

            
            </div>
                
        </div>
    );
};

export default GraphicsJSX;