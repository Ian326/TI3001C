import EmbedFigure from "../../components/common/EmbedFigures";

const GraphicsJSX = () => {
    return (
        <div className='flex justify-center'>
            
            <div className='w-10/12 p-8'>
                
                <section>
                    
                    <h1>Costos</h1>
                    
                    <div className='flex justify-center overflow-x-visible'>
                        
                        <div className='bg-slate-300 min-h-[360px] min-w-[360px] flex-grow'>
                            
                            <EmbedFigure route='/figure1' />

                        </div>
                        
                        <div className='grid grid-cols-2 grid-rows-2 size-1/2 justify-items-center'>
                            
                            <div className='bg-slate-300 m-6 '>a</div>
                            
                            <div className='bg-slate-300 m-6'>a</div>
                            
                            <div className='bg-slate-300 m-6'>a</div>
                            
                            <div className='bg-slate-300 m-6'>a</div>
                        </div>
                    
                    </div>

                </section>
            
            </div>
                
        </div>
    );
};

export default GraphicsJSX;