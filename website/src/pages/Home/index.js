import React from "react";
import SidebarJSX from "../../components/common/Sidebar";
import {
  DrawerJSX,
  handleDrawerToggle,
} from "../../components/common/SidebarDrawer";
import { useNavigation } from "../../hooks/useNavigationBar";
import logo from "../../assets/tdr-logo.png";

const HomeJSX = () => {
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
        <DrawerJSX sections={sections} activeSection={activeSection} />
      </div>

      <div className="w-11/12 md:w-[85%] p-8">
        <section id="Introduccion">
          <div className=" mb-2 bg-white rounded-md">
            <h1>
              TDR: Empresa especializada en servicios integrales de transporte
            </h1>
          </div>

          <div className="p-6 bg-neutral-50 rounded-md text-justify">

            <div className="flex flex-col lg:flex-row items-center">
              <img className="w-1/2 h-auto p-8" src={logo} alt="TDR_logo" />
              <img className="w-1/2 h-auto p-8" src={logo} alt="TDR_logo" />
            </div>


          </div>

        </section>

        <section id="Costos">
          <div className=" my-2 rounded-md">
            <h1>
              Costos
            </h1>
          </div>

          <div className="p-6 bg-neutral-50 rounded-md text-justify">
            <h2>
              Tansformando Costos en Oportunidades: Cuantificacion de los
              Beneficios Econonmicos del Mantenimiento Predictivo
            </h2>

            <div className="flex flex-col lg:flex-row items-center">
              <p className="p-4 w-1/2">
                A continuación se presenta una estimación de los costos de
                mantenimiento predictivo para los tres cuatrimestres de 2025. Para
                ello, se consideraron supuestos como la tasa de inflación
                pronosticada, el incremento en el precio de las refacciones de los
                tractos, la volatilidad en el precio del combustible, así como una
                tasa de crecimiento estimada en la industria de la pintura en
                México, dado que nuestro proyecto, Sayer Full, se dedica a
                transportar exclusivamente cargamentos de pintura.
              </p>
              <img className="w-1/2 h-auto p-8" src={logo} alt="TDR_logo" />
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
              De Números a Estrategia: Análisis Inferencial para Optimizar Costos y Rentabilidad
            </h2>

            <p className="">
              Realizando un modelo de regresión múltiple, obtuvimos los
              siguientes hallazgos:
            </p>

            <div className="flex flex-col lg:flex-row items-center px-4">
              <ul className="list-disc pl-5">
                <li>
                  El kilometraje (KMS) y el tiempo medio de reparación (MTTR) son predictores significativos del costo de reparaciones (TOTAL). Cada kilómetro adicional aumenta en promedio el costo de las reparaciones en 0.0107. Por su parte, cada incremento unitario en el MTTR aumenta el costo de reparaciones en 12.66.
                </li>
                <li>
                  A medida que los vehículos se vuelven más viejos, la necesidad de reparaciones correctivas disminuye, posiblemente debido a un mejor mantenimiento preventivo en vehículos más nuevos. Se descubrió que un aumento de 1 año en la edad del vehículo (UnitYear) se asocia con una disminución del 2.95% en las probabilidades de que el mantenimiento sea correctivo.
                </li>
              </ul>
              <img className="w-1/2 h-auto p-8" src={logo} alt="TDR_logo" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeJSX;
