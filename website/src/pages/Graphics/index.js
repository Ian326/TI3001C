import EmbedFigure from "../../components/common/EmbedFigures";
import SidebarJSX from "../../components/common/Sidebar";
import { DrawerJSX, handleDrawerToggle } from "../../components/common/SidebarDrawer";
import { useNavigation } from "../../hooks/useNavigationBar";
import LazyLoad from 'react-lazyload';

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

                    <div className='flex flex-col justify-center bg-slate-50'>
                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren7' />
                            </LazyLoad>
                        </div>
                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure_i2' />
                            </LazyLoad>
                        </div>
                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren1' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren12' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren13' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren14' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren15' />
                            </LazyLoad>
                        </div>
                    </div>

                </section>
                
                <section id='Reparaciones'>
                    
                    <h1 className="my-2">Reparaciones</h1>
                    
                    <div className='flex flex-col justify-center bg-slate-50'>
                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure3' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure_i1' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure4' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure5' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure7' />
                            </LazyLoad>
                        </div>

                    </div>

                </section>

                <section id='MTBF'>

                    <h1>MTBF (Tiempo Entre Reparaciones)</h1>

                    <div className='flex flex-col justify-center bg-slate-50'>
                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren3' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren5' />
                            </LazyLoad>
                        </div>
                    </div>

                </section>

                <section id='Freq. Mant.'>

                    <h1>Frecuencias de Mantenimiento</h1>

                    <div className='flex flex-col justify-center bg-slate-50'>
                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figure6' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren8' />
                            </LazyLoad>
                        </div>

                        <div className='flex flex-wrap mt-4 justify-stretch'>
                            <LazyLoad className='min-h-[360px] min-w-[360px] grow'>
                                <EmbedFigure route='/figuren9' />
                            </LazyLoad>
                        </div>
                    </div>

                </section>

            </div>

        </div>
    );
};

export default GraphicsJSX;