# ============================== Librerías =======================================================
import pandas as pd
from dash import Dash, html, dcc, Input, Output
import plotly.express as px
from plotly.subplots import make_subplots
from matplotlib.colors import LinearSegmentedColormap

# ============================== Carga de datos ==================================================
data_sayer = pd.read_csv('./assets/data_sayer.csv')
data_sayer2 = pd.read_csv('./assets/data_sayer2.csv')
sayer_maint2_byUnit_corrective = pd.read_csv("./assets/sayer_maint2_byUnit_corrective.csv")
sayer_maint2_byUnit = pd.read_csv("./assets/sayer_maint2_byUnit.csv")
sayer_maint2_byUnit_preventive = pd.read_csv("./assets/sayer_maint2_byUnit_preventive.csv")


# ============================== Preprocesamiento de datos =======================================
# Convertir 'OpenedDate' a formato datetime
data_sayer2['OpenedDate'] = pd.to_datetime(data_sayer2['OpenedDate'])

# Convertir 'laghoras' a valores numéricos para evitar errores
data_sayer2['laghoras'] = pd.to_numeric(data_sayer2['laghoras'], errors='coerce')

# Renombrar 'OpenedTrimester' a 'OpenedCuatrimester'
data_sayer2['OpenedCuatrimester'] = data_sayer2['OpenedTrimester']

# Crear df para las unidades tipo 'TRACTOR'
sayer_maint2_tractos = sayer_maint2_byUnit[sayer_maint2_byUnit['UnitType'] == 'TRACTOR']

# Filtrar datos donde 'RepairCount' es mayor que 0
sayer_maint2_tractos = sayer_maint2_tractos[sayer_maint2_tractos['RepairCount'] > 0].sort_values('RepairCount', ascending=False)

# Convertir 'UnitID' a string para evitar errores
sayer_maint2_tractos['UnitID'] = sayer_maint2_tractos['UnitID'].astype(str)


# ============================== Paleta de colores graficas ======================================
positions = [0, 0.5, 1]
colors = ['midnightblue', 'lightgray', 'darkorange']
tdr_cmap = LinearSegmentedColormap.from_list('tdr_cmap', list(zip(positions, colors)))

# Generar una lista de colores interpolados para cada barra
num_bars = len(sayer_maint2_tractos)  # Número de barras
color_list = [tdr_cmap(i / (num_bars - 1)) for i in range(num_bars)]

# Convertir colores a formato hexadecimal
color_list_hex = ['#%02x%02x%02x' % (int(c[0]*255), int(c[1]*255), int(c[2]*255)) for c in color_list]


# ============================== df's por año ====================================================
# Creacion de un DataFrame para los mantenimientos del año 2022
data_sayer2_2022 = data_sayer2[data_sayer2['MaintenanceYear'] == 2022]

# Creacion de un DataFrame para los mantenimientos del año 2023
data_sayer2_2023 = data_sayer2[data_sayer2['MaintenanceYear'] == 2023]

# Creacion de un DataFrame para los mantenimientos del año 2024
data_sayer2_2024 = data_sayer2[data_sayer2['MaintenanceYear'] == 2024]


# ============================== Gráficas ========================================================

# Distribucion de manteniminientos por tipo a lo largo de los años ===============================
figure4 = make_subplots(
    rows=1, cols=3,
    shared_yaxes=True,  
    subplot_titles=("2022", "2023", "2024")
)

# Gráfica para 2022
fig_2022 = px.histogram(
    data_sayer2_2022,
    x='ClosedMonth',
    color='JobTypeSummary',
    category_orders={'ClosedMonth': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]},
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'}
).update_traces(showlegend=True)

# Gráfica para 2023
fig_2023 = px.histogram(
    data_sayer2_2023,
    x='ClosedMonth',
    color='JobTypeSummary',
    category_orders={'ClosedMonth': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]},
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'}
).update_traces(showlegend=False)

# Gráfica para 2024
fig_2024 = px.histogram(
    data_sayer2_2024,
    x='ClosedMonth',
    color='JobTypeSummary',
    category_orders={'ClosedMonth': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]},
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'}
).update_traces(showlegend=False)

# Agregar las trazas de cada gráfica a las subplots
for trace in fig_2022['data']:
    figure4.add_trace(trace, row=1, col=1)
for trace in fig_2023['data']:
    figure4.add_trace(trace, row=1, col=2)
for trace in fig_2024['data']:
    figure4.add_trace(trace, row=1, col=3)

# Configurar diseño de la figura
figure4.update_layout(
    title="Cantidad de reparaciones por mes (2022-2024)",
    xaxis1=dict(
        tickmode='array',
        tickvals=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ticktext=["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        title_text="Mes"
    ),
    xaxis2=dict(
        tickmode='array',
        tickvals=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ticktext=["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        title_text="Mes"
    ),
    xaxis3=dict(
        tickmode='array',
        tickvals=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ticktext=["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        title_text="Mes"
    ),
    yaxis_title="Cantidad de reparaciones",
    plot_bgcolor="white",
    paper_bgcolor="white"
)
# ================================================================================================

# Distribucion de mantenimientos por tipo a lo largo de los años (dividido por cuatrimestres) ====
figure_cuatrimester = make_subplots(
    rows=1, cols=3,
    shared_yaxes=True,
    subplot_titles=("2022", "2023", "2024")
)

# Gráfica para 2022
fig_cuatrimester_2022 = px.histogram(
    data_sayer2_2022,
    x='OpenedCuatrimester',
    color='JobTypeSummary',
    category_orders={'OpenedCuatrimester': [1, 2, 3]},
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'},
    title="Cantidad de reparaciones por cuatrimestre en 2022"
).update_traces(showlegend=True)

# Gráfica para 2023
fig_cuatrimester_2023 = px.histogram(
    data_sayer2_2023,
    x='OpenedCuatrimester',
    color='JobTypeSummary',
    category_orders={'OpenedCuatrimester': [1, 2, 3]},
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'},
    title="Cantidad de reparaciones por cuatrimestre en 2023"
).update_traces(showlegend=False)

# Gráfica para 2024
fig_cuatrimester_2024 = px.histogram(
    data_sayer2_2024,
    x='OpenedCuatrimester',
    color='JobTypeSummary',
    category_orders={'OpenedCuatrimester': [1, 2, 3]},
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'},
    title="Cantidad de reparaciones por cuatrimestre en 2024"
).update_traces(showlegend=False)

# Agregar las trazas de cada gráfica a las subplots
for trace in fig_cuatrimester_2022['data']:
    figure_cuatrimester.add_trace(trace, row=1, col=1)  # Añadir a la primera columna
for trace in fig_cuatrimester_2023['data']:
    figure_cuatrimester.add_trace(trace, row=1, col=2)  # Añadir a la segunda columna
for trace in fig_cuatrimester_2024['data']:
    figure_cuatrimester.add_trace(trace, row=1, col=3)  # Añadir a la tercera columna

# Configurar diseño de la figura combinada
figure_cuatrimester.update_layout(
    title="Cantidad de reparaciones por cuatrimestre (2022-2024)",
    xaxis1=dict(
        tickmode='array',
        tickvals=[1, 2, 3],
        ticktext=['Ene-Abr', 'May-Ago', 'Sep-Dic'],
        title_text="Cuatrimestre"
    ),
    xaxis2=dict(
        tickmode='array',
        tickvals=[1, 2, 3],
        ticktext=['Ene-Abr', 'May-Ago', 'Sep-Dic'],
        title_text="Cuatrimestre"
    ),
    xaxis3=dict(
        tickmode='array',
        tickvals=[1, 2, 3],
        ticktext=['Ene-Abr', 'May-Ago', 'Sep-Dic'],
        title_text="Cuatrimestre"
    ),
    yaxis_title="Cantidad de reparaciones",
    plot_bgcolor="white",
    paper_bgcolor="white",
)
# ================================================================================================

# Frecuencia por tipo de unidad ==================================================================
corrective_frequencies = (
    sayer_maint2_byUnit_corrective.groupby('UnitType')['RepairCount']
    .sum()
    .reset_index()
    .rename(columns={"RepairCount": "Frequency"})
)

fig_corrective_histogram = px.bar(
    corrective_frequencies,
    x='UnitType',
    y='Frequency',
    color='UnitType',
    title='Frecuencia de mantenimiento correctivo por tipo de unidad',
    color_discrete_map={
        'TRACTOR': 'midnightblue',
        'TRAILER': 'lightgray',
        'DOLLY': 'darkorange'
    }
)

# Ajustar diseño
fig_corrective_histogram.update_layout(
    xaxis_title="Tipo de unidad",
    yaxis_title="Frecuencia",
    plot_bgcolor="white",
    paper_bgcolor="white",
)

# Configurar bordes de las barras
fig_corrective_histogram.update_traces(
    marker_line_color='black',
    marker_line_width=1.5
)
# ================================================================================================

# Acumulado de registros por mes =================================================================
df_temp = data_sayer2.sort_values(by='OpenedDate')

# Crear una columna para el mes y año de apertura
df_temp['MonthYear'] = df_temp['OpenedDate'].dt.month

# Contar los registros por mes y año
df_temp_counts = df_temp.groupby(['MonthYear', 'MaintenanceYear']).size().reset_index(name='Count')

# Calcular el conteo acumulativo
df_temp_counts['CumulativeCount'] = df_temp_counts.groupby('MaintenanceYear')['Count'].cumsum()

# Crear la gráfica con Plotly
fig_cumulative = px.line(
    df_temp_counts,
    x='MonthYear',
    y='CumulativeCount',
    color='MaintenanceYear',
    title='Cantidad acumulativa de registros por mes',
    color_discrete_map={
        2022: 'midnightblue',
        2023: 'lightgray',
        2024: 'darkorange'
    },
    labels={
        'MonthYear': 'Mes',
        'CumulativeCount': 'Cantidad acumulativa de registros',
        'MaintenanceYear': 'Año'
    }
)

# Ajustar diseño de la gráfica
fig_cumulative.update_layout(
    xaxis=dict(
        tickmode='array',
        tickvals=list(range(1, 13)),
        ticktext=['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        title='Mes'
    ),
    yaxis=dict(
        title='Cantidad acumulativa de registros'
    ),
    legend_title_text='Año',
    plot_bgcolor="white",
    paper_bgcolor="white",
)

# Agregar líneas verticales en los meses clave
fig_cumulative.add_vline(x=4.5, line_width=1.5, line_dash="dash", line_color="lightgrey")
fig_cumulative.add_vline(x=8.5, line_width=1.5, line_dash="dash", line_color="lightgrey")
fig_cumulative.add_vline(x=12.5, line_width=1.5, line_dash="dash", line_color="lightgrey")

# Bordes en las líneas
fig_cumulative.update_traces(line=dict(width=3))
# ================================================================================================

# Gráficas individuales ==========================================================================
graph1 = px.bar(data_sayer2, x="UnitID", y="TOTAL")

graph2 = px.bar(sayer_maint2_byUnit_corrective, x='UnitID', y='RepairCount',
                title="Reparaciones por UnitID",
                labels={"x":"Unidad", "y":"Cuenta de reparaciones"},
                text_auto= True)

graph3 = px.histogram(sayer_maint2_byUnit, x="AvgHoursBetweenRepairs", 
                      title="Distribución de Tiempo promedio entre reparaciones", 
                      labels={"x":"Horas", "y":"Unidades"},
                      text_auto= True
                      )

graph4 = px.box(sayer_maint2_byUnit, x="AvgHoursBetweenRepairs", 
                      title="Boxplot de Tiempo promedio entre reparaciones",
                      points="all"
                      )

graph5 = px.histogram(data_sayer2, x="laghoras", 
                      title="Distribución de Tiempo promedio de reparaciones", 
                      labels={"x":"Horas", "y":"Unidades"},
                      text_auto= True
                      )

graph6 = px.box(data_sayer2, x="laghoras", 
                      title="Boxplot de Tiempo promedio de reparaciones",
                      points="all"
                      )

graph7 = px.histogram(data_sayer2, x="TOTAL",
                      title="Distribución de costos totales de mantenimiento",
                      labels={"x":"Costos", "y":"Frecuencia"},
                      text_auto = True
                      )

graph8 = px.histogram(sayer_maint2_byUnit_corrective, x="RepairCount",
                      title="Distribución de frecuencia de mantenimiento correctivo",
                      text_auto= True
                      )

graph9 = px.histogram(sayer_maint2_byUnit_preventive, x="RepairCount",
                      title="Distribución de frecuencia de mantenimiento preventivo",
                      text_auto= True
                      )

graph10 = px.box(sayer_maint2_byUnit_preventive, x="RepairCount",
                 title="Boxplot de Cantidad de reparaciones por Unidad",
                 points="all"
                 )

graph11 = px.line(data_sayer, x="OpenedDate", y="TOTAL",
                  title="Costos 2022-2024",
                  labels={"x":"Tiempo", "y":"Costo"}
                  )

graph12 = px.bar(data_sayer, y="Jobcode", x="TOTAL",
                 title="Costos por Jobcode",
                 text_auto=True
                 )
# ================================================================================================

################################################################ cambiar color graficas 
# Crear la figura base para el histograma
fig_hist = px.histogram(
    sayer_maint2_byUnit_corrective,
    x='AvgHoursBetweenRepairs',
    nbins=30,  # Número de bins en el histograma
    title='Distribución de las horas promedio entre reparaciones (MTBF)',
)

# Ajustar los colores del histograma
fig_hist.update_traces(
    marker_color='midnightblue',
    marker_line_color='black',
    marker_line_width=1.5
)

# Ajustar diseño del gráfico
fig_hist.update_layout(
    xaxis_title="Horas",
    yaxis_title="Frecuencia",
    plot_bgcolor="white",
    paper_bgcolor="white",
    legend_title_text="Leyenda"
)



###############################################################################cambio de color 2
fig_hist2 = px.histogram(

    data_sayer2,
    x='laghoras',
    nbins=35,  # Número de bins
    title='Distribución de las "horas promedio" en reparaciones (MTTR).',
)

# Personalizar el color del histograma
fig_hist2.update_traces(
    marker_color='midnightblue',
    marker_line_color='black',
    marker_line_width=1.5
)

# Ajustar diseño del gráfico
fig_hist2.update_layout(
    xaxis=dict(range=[0, 1500]),
    xaxis_title="Horas",
    yaxis_title="Frecuencia",
    plot_bgcolor="white",
    paper_bgcolor="white",
    legend_title_text="Leyenda"
)

##########################################cambio de color 3
# positions = [0, 0.5, 1]
colors = ['midnightblue', 'lightgray', 'darkorange']
custom_cmap = LinearSegmentedColormap.from_list('custom_cmap', list(zip(positions, colors))) 
# Generar una lista de colores interpolados
n_colors = len(data_sayer2['UnitID'].unique())  # Número de unidades únicas
color_list_rgb = [custom_cmap(i / (n_colors - 1)) for i in range(n_colors)]
color_list_hex = ['#%02x%02x%02x' % (int(r*255), int(g*255), int(b*255)) for r, g, b, _ in color_list_rgb]

# Agrupar los costos totales por cada unidad
data_aggregated = data_sayer2.groupby('UnitID', as_index=False)['TOTAL'].sum()

# Crear el gráfico de barras con los costos totales por unidad
fig_costos_agrupados = px.bar(
    data_aggregated,
    x='UnitID',
    y='TOTAL',
    title='Costos totales agrupados por unidad',
    color='UnitID',
    color_discrete_sequence=color_list_hex,
)

# Personalizar el diseño del gráfico
fig_costos_agrupados.update_layout(
    xaxis_title="Unidad",
    yaxis_title="Costo Total",
    plot_bgcolor="white",
    paper_bgcolor="white",
    xaxis=dict(tickangle=-45),
    bargap=0.2
)

###################################################################################cambio de color 
# Crear histograma con Plotly
fig_hist_corrective = px.histogram(
    sayer_maint2_byUnit_corrective,
    x='RepairCount',
    nbins=10,

    title='Distribución de las frecuencias de mantenimiento correctivo.',
    color_discrete_sequence=['midnightblue'],
)

# Ajustar diseño del gráfico
fig_hist_corrective.update_layout(
    xaxis_title="Frecuencia de mantenimiento correctivo",
    yaxis_title="Cantidad de unidades",
    plot_bgcolor="white",
    paper_bgcolor="white",
    bargap=0.1
)

# Personalizar las trazas
fig_hist_corrective.update_traces(
    marker_line_color='black',
    marker_line_width=1.5
)

############################################################################cambio color
fig_hist_preventive = px.histogram(
    sayer_maint2_byUnit_preventive,
    x='RepairCount',
    nbins=10,  # Número de bins ajustable
    title='Distribución de las frecuencias de mantenimiento preventivo.',
    color_discrete_sequence=['midnightblue'],
)

# Ajustar diseño del gráfico
fig_hist_preventive.update_layout(
    xaxis_title="Frecuencia de mantenimiento preventivo",
    yaxis_title="Cantidad de unidades",
    plot_bgcolor="white",
    paper_bgcolor="white",
    bargap=0.1
)

# Personalizar las trazas
fig_hist_preventive.update_traces(
    marker_line_color='black',
    marker_line_width=1.5
)
################################################################################cambio de color 
# Crear histograma con Plotly
fig_hist_costos = px.histogram(
    data_sayer2,
    x='TOTAL',
    nbins=20,
    title='Distribución de los costos de mantenimiento.',
    color_discrete_sequence=['midnightblue'],
)

# Ajustar diseño del gráfico
fig_hist_costos.update_layout(
    xaxis_title="Costo de mantenimiento",
    yaxis_title="Frecuencia",
    plot_bgcolor="white",
    paper_bgcolor="white",
    bargap=0.1
)

# Personalizar las trazas
fig_hist_costos.update_traces(
    marker_line_color='black',
    marker_line_width=1.5 
)
# ================================================================================================

# ============================== Diccionario de figuras ==========================================
figures = {
    "figure3": px.bar(
                    sayer_maint2_tractos,
                    x='UnitID',
                    y='RepairCount',
                    title='Cantidad de reparaciones por unidad de la flota de Sayer Full'
                ).update_traces(
                    marker_color=color_list_hex,
                    marker_line_width=1.5
                ).update_layout(
                    xaxis_title="Unidad",
                    yaxis_title="Cantidad de reparaciones",
                    xaxis=dict(
                        categoryorder='total descending',
                        showgrid=False,
                        tickmode='array',
                        tickvals=sayer_maint2_tractos['UnitID'],
                        ticktext=sayer_maint2_tractos['UnitID'],
                    ),
                    plot_bgcolor="white",
                    paper_bgcolor="white",
                    barmode='group',
                ),
    'figure4' : figure4,

    'figure5' : figure_cuatrimester,

    'figure6' : fig_corrective_histogram,

    'figure7' : fig_cumulative,

    'figure8' : fig_hist,

    'figure9' : fig_hist2,

    'figure10' : fig_costos_agrupados,

    'figure11' : fig_hist_corrective,

    'figure12' : fig_hist_preventive,

    'figure13' : fig_hist_costos,

    "figuren1": fig_costos_agrupados,

    "figuren2": graph2,

    "figuren3": fig_hist,

    "figuren4": graph4,

    "figuren5": fig_hist2,

    "figuren6": graph6,

    "figuren7": fig_hist_costos,

    "figuren8": fig_hist_corrective,

    "figuren9": fig_hist_preventive, 

    "figuren10": graph10,

    "figuren11": graph11,

    "figuren12": graph12
}

# ============================== Aplicación Dash =================================================
# Crear la aplicación Dash
app = Dash(__name__)

# Layout general con un elemento para seguimiento de URL
app.layout = html.Div(children=[
    dcc.Location(id='url', refresh=False),  # Rastrea la URL para mostrar diferentes figuras
    html.Div(id='page-content')  # Contenedor dinámico para el contenido basado en la ruta
])

# Callback para actualizar el contenido dinámicamente basado en la URL
@app.callback(
    Output('page-content', 'children'),
    Input('url', 'pathname')
)
def display_page(pathname):
    figure_name = pathname.lstrip("/")
    
    if figure_name in figures:
        figure = figures[figure_name]
        figure.update_layout(
            paper_bgcolor="rgba(0,0,0,0)",
        )
        return html.Div(
            children=[
                dcc.Graph(
                    id=f"{figure_name}-graph",
                    figure=figure,
                    style={
                        'margin': '0',
                        'padding': '0',
                        'height': '100%',
                        'width': '100%',
                    },
                ),
            ],
            className="graph-container",
            style={
                'margin': '0',
                'padding': '0',
                'width': '100%',
                'height': '90vh',
            },
        )

    # 404 - Page not found
    return html.Div("404: Figure not found", style={"textAlign": "center", "fontSize": "24px"})

if __name__ == '__main__':
    app.run_server(debug=False)
