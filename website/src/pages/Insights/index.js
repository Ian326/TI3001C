import React from "react";
import SidebarJSX from "../../components/common/Sidebar";
import {DrawerJSX, handleDrawerToggle} from "../../components/common/SidebarDrawer";
import TableJSX from "../../hooks/createTable";
import { useNavigation } from "../../hooks/useNavigationBar";

const InsightsJSX = () => {

    const { activeSection, sections } = useNavigation();

    const table1 = {
        "Unit Type": [
            'Dolly',
            'Tracto',
            'Trailer',
        ],
        "Total (Promedio / Reparacion)": [
            '$ 2,058.12',
            '$ 5,504.39',
            '$ 1,786.76',
        ],
    };

    const table2 = {
        "Unit Type": [
            'Dolly',
            'Tracto',
            'Trailer',
        ],
        "Frecuencia de Mantenimientos Correctivos": [
            '207',
            '408',
            '368',
        ],
        "Porcentaje de los Mantenimientos Correctivos": [
            '21.14 %',
            '41.67 %',
            '37.18 %',
        ],
    };

    const table3 = {
        "Descripcion Pieza": [
            'Sensor de temperatura, aire y presión EDT-PAI',
            'Kit 10 Sensores Tpms Autel (presión llantas)',
            'UNIVERSAL TESTER PARA SENSORES CAMIOI TOTAL',
            'TOTAL',
        ],
        "Precio Unitario": [
            '$1,790.05',
            '$442.15',
            '$52,012.58',
            '$54,244.78',
        ],
        "Costo por flota": [
            '$12,530.35',
            '$3,095.08',
            '$223,654.09',
            '$239,279.52',
        ],
    };

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

            <div className="w-11/12 md:w-[85%] p-8">
                <section id="Mantenimientos">
                    <div className=" my-2 rounded-md">
                        <h1>
                            Mantenimientos
                        </h1>
                    </div>

                    <div className="p-6 bg-neutral-50 rounded-md text-justify">
                        <p>
                            El kilometraje (kMS) y el tiempo medio de reparación (MTTR) son predictores significativos del costo de reparaciones (TOTAL). Cada kilómetro adicional aumenta en promedio el costo de las reparaciones en 0.0107. Por su parte, cada incremento unitario en el MTTR aumenta el costo de reparaciones en 12.66.
                        </p>
                        <p>
                            A medida que los vehículos se vuelven más viejos, la necesidad de reparaciones correctivas disminuye, posiblemente debido a un mejor mantenimiento preventivo en vehículos más nuevos. Se descubrió que un aumento de 1 año en la edad del vehículo (UnitYear) se asocia con una disminución del 2.95% en las probabilidades de que el mantenimiento sea correctivo.
                        </p>
                    </div>
                </section>

                <div className=" my-2 rounded-md">
                    <h1>
                        Pregunta de investigacion estadistica
                    </h1>
                </div>

                <div className="p-6 bg-neutral-50 rounded-md text-justify">
                    <h2 className="mb-0">
                        ¿Existe una relación significativa entre el tipo de unidad, su edad y la frecuencia de mantenimiento correctivo, y el número de fallas que presentan trimestralmente? Si es así, ¿cómo afectan estas fallas o mantenimientos en los costos de mantenimiento y qué estrategias podrían implementarse para reducir estos costos en un 10-15% anual?
                    </h2>
                </div>

                <section id="Costos">
                    <div className=" my-2 rounded-md">
                        <h1>
                            Costos
                        </h1>
                    </div>

                    <div className="p-6 bg-neutral-50 rounded-md text-justify">
                        <h2>
                            Radiografía del Mantenimiento: Análisis Descriptivo y Resumen Estadístico
                        </h2>

                        <p className="">
                            ¿Existe una diferencia significativa en los costos de mantenimiento entre diferentes tipos de equipos?
                        </p>

                        <ul className="list-disc mb-4 pl-10">
                            <li>
                                Hipótesis Nula (H₀): No existe una diferencia significativa en los costos de mantenimiento entre diferentes tipos de equipos.
                            </li>
                            <li>
                                Hipótesis Alternativa (H₁): Existe una diferencia significativa en los costos de mantenimiento entre diferentes tipos de equipos.
                            </li>
                        </ul>

                        <p className="">
                            Respuesta: Sí, los costos de mantenimiento son los siguientes:
                        </p>

                        <div className="flex justify-center px-8">
                            <div className="md:w-[75%]">
                                <TableJSX data={table1} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Modelos">
                    <div className=" my-2 rounded-md">
                        <h1>
                            Modelos
                        </h1>
                    </div>

                    <div className="p-6 bg-neutral-50 rounded-md text-justify">
                        <h2>
                            Apuesta al Futuro: Prueba de Hipótesis sobre la Eficacia del Mantenimiento Predictivo
                        </h2>

                        <p className="">
                            ¿Existe una diferencia significativa en la frecuencia del mantenimiento correctivo entre diferentes tipos de equipos?
                        </p>

                        <ul className="list-disc mb-4 pl-10">
                            <li>
                                Hipótesis Nula (H₀): No existe una diferencia significativa en la frecuencia del mantenimiento correctivo entre diferentes tipos de equipos.
                            </li>
                            <li>
                                Hipótesis Alternativa (H₁): Existe una diferencia significativa en la frecuencia del mantenimiento correctivo entre diferentes tipos de equipos.
                            </li>
                        </ul>

                        <p className="">
                            Respuesta: Sí
                        </p>

                        <div className="flex justify-center md:px-8">
                            <div className="md:w-[75%]">
                                <TableJSX data={table2} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Propuesta">
                    <div className=" my-2 rounded-md">
                        <h1>
                            Propuesta
                        </h1>
                    </div>

                    <div className="p-6 bg-neutral-50 rounded-md text-justify">
                        <h2>
                            Transformando Costos en Oportunidades: Cuantificación de los Beneficios Económicos del Mantenimiento Predictivo
                        </h2>

                        <p className="">
                            La propuesta que se realiza para disminuir los costos de mantenimiento, es la instalación de sensores que puedan determinar al momento el estado en que se encuentra cada unidad, y así anticipar y mejorar el programa de mantenimientos. A continuación se detallan los sensores propuestos a instalar y sus beneficios:
                        </p>

                        <ul className="list-disc mb-4 pl-10 text-justify w-[85%]">
                            <li>
                                Sensor de temperatura, aire y presión EDT: Permitiría detectar el estado actual de la caja, ya que se presentan en gran medida fallas en esta parte.
                            </li>
                            <li>
                                Kit 10 Sensores Tpms Autel: Permite monitorear la presión de las llantas, considerando que es otra de las fallas más comunes en los tractos.
                            </li>
                            <li>
                                UNIVERSAL TESTER PARA SENSORES CAMIÓN CISTERNA COMBUSTIBLE TESTER SCULLY: Es de suma importancia tener el conocimiento del nivel de combustible al momento de cada unidad.
                            </li>
                        </ul>

                        <p className="">
                            Respuesta: Sí, los costos de mantenimiento son los siguientes:
                        </p>

                        <div className="flex justify-center md:px-8">
                            <div className="md:w-[75%]">
                                <TableJSX data={table3} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default InsightsJSX;