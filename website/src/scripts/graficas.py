import pandas as pd
from dash import Dash, html, dcc, Input, Output
import plotly.express as px
from matplotlib.colors import LinearSegmentedColormap

# Cargar los datos
data_sayer = pd.read_csv('C:/Users/harry/Documents/RETOTDRGIT/TI3001C/website/src/scripts/data_sayer2.csv')





####################################### Ajustes de datos
# Asegurar el formato correcto de las columnas
# Convertir 'OpenedDate' a formato datetime
data_sayer['OpenedDate'] = pd.to_datetime(data_sayer['OpenedDate'])
# Convertir 'laghoras' a valores numéricos para evitar errores
data_sayer['laghoras'] = pd.to_numeric(data_sayer['laghoras'], errors='coerce')
data_sayer['ClosedMonth'] = (data_sayer['OpenedDate'] + pd.to_timedelta(data_sayer['lagdias'], unit='d')).dt.month


# Crear la columna 'OpenedCuatrimester' basada en los meses
def calculate_cuatrimester(month):
    if month in [1, 2, 3, 4]:
        return 1  # Cuatrimestre 1
    elif month in [5, 6, 7, 8]:
        return 2  # Cuatrimestre 2
    elif month in [9, 10, 11, 12]:
        return 3  # Cuatrimestre 3
    else:
        return None

data_sayer['OpenedCuatrimester'] = data_sayer['OpenedDate'].dt.month.apply(calculate_cuatrimester)

# Agrupar los datos por 'UnitID' y 'UnitType' para obtener métricas agregadas
sayer_maint2_byUnit = data_sayer.groupby(['UnitID', 'UnitType']).agg(
    RepairCount=('OpenedDate', 'size'),  # Conteo de reparaciones por unidad
    RepairDates=('OpenedDate', lambda x: list(
        x + pd.to_timedelta(data_sayer.loc[x.index, 'laghoras'], unit='h')))  # Agregar horas a las fechas de apertura
).reset_index()

sayer_maint2_byUnit_byRepReason = data_sayer.groupby(
                                    ['UnitID', 'UnitType', 'UnitYear', 'JobTypeSummary']).agg(
                                        RepairCount=('OpenedDate', 'size'),
                                        RepairDates=('OpenedDate', lambda x:
                                            list(x + pd.to_timedelta(data_sayer.loc[x.index, 'laghoras'], unit='h')))
                                    ).reset_index()

# Filtrar solo las unidades tipo 'TRACTOR'
filtered_data = sayer_maint2_byUnit[sayer_maint2_byUnit['UnitType'] == 'TRACTOR']
# Filtrar datos donde 'RepairCount' es mayor que 0
filtered_data_with_repair = filtered_data[filtered_data['RepairCount'] > 0].sort_values('RepairCount', ascending=False)
filtered_data_with_repair['UnitID'] = filtered_data_with_repair['UnitID'].astype(str)


################################### COLOR TDR
# Definir el colormap
positions = [0, 0.5, 1]
colors = ['midnightblue', 'lightgray', 'darkorange']
tdr_cmap = LinearSegmentedColormap.from_list('tdr_cmap', list(zip(positions, colors)))

# Generar una lista de colores interpolados para cada barra
num_bars = len(filtered_data_with_repair)  # Número de barras
color_list = [tdr_cmap(i / (num_bars - 1)) for i in range(num_bars)]

# Convertir colores a formato hexadecimal
color_list_hex = ['#%02x%02x%02x' % (int(c[0]*255), int(c[1]*255), int(c[2]*255)) for c in color_list]



####################################### Diccionario de figuras
# Figura de ejemplo para pruebas
df = pd.DataFrame({
    "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],
    "Amount": [4, 1, 2, 2, 4, 5],
    "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]
})


####################################### DataFrame por año
# Creacion de una columna 'MaintenanceYear' para identificar el año de mantenimiento
data_sayer['MaintenanceYear'] = data_sayer['OpenedDate'].dt.year
# Creacion de un DataFrame para los mantenimientos del año 2022
data_sayer2_2022 = data_sayer[data_sayer['MaintenanceYear'] == 2022]

# Creacion de un DataFrame para los mantenimientos del año 2023
data_sayer2_2023 = data_sayer[data_sayer['MaintenanceYear'] == 2023]

# Creacion de un DataFrame para los mantenimientos del año 2024
data_sayer2_2024 = data_sayer[data_sayer['MaintenanceYear'] == 2024]



################################################ SUBGRAFICAS POR YEAR

from plotly.subplots import make_subplots
import plotly.graph_objects as go

# Crear subplots con 1 fila y 3 columnas
figure4 = make_subplots(
    rows=1, cols=3,  # Una fila, tres columnas
    shared_yaxes=True,  # Compartir el eje Y
    subplot_titles=("2022", "2023", "2024")  # Títulos para cada subplot
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
    figure4.add_trace(trace, row=1, col=1)  # Añadir a la primera columna
for trace in fig_2023['data']:
    figure4.add_trace(trace, row=1, col=2)  # Añadir a la segunda columna
for trace in fig_2024['data']:
    figure4.add_trace(trace, row=1, col=3)  # Añadir a la tercera columna

# Configurar diseño de la figura combinada
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
    paper_bgcolor="white",
    height=800,  # Altura del gráfico
    width=1700,  # Ancho del gráfico
    margin=dict(t=50, l=50, b=50, r=50)
)


###################################################################SUBGRAFICAS POR CUATRIMESTRES
# Crear subplots con 1 fila y 3 columnas
figure_cuatrimester = make_subplots(
    rows=1, cols=3,  # Una fila, tres columnas
    shared_yaxes=True,  # Compartir el eje Y
    subplot_titles=("2022", "2023", "2024")  # Títulos para cada subplot
)


# Gráfica para 2022
fig_cuatrimester_2022 = px.histogram(
    data_sayer2_2022,
    x='OpenedCuatrimester',
    color='JobTypeSummary',
    category_orders={'OpenedCuatrimester': [1, 2, 3]},  # Ordenar cuatrimestres
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'},
    title="Cantidad de reparaciones por cuatrimestre en 2022"
).update_traces(showlegend=True)  # Mostrar leyenda

# Gráfica para 2023
fig_cuatrimester_2023 = px.histogram(
    data_sayer2_2023,
    x='OpenedCuatrimester',
    color='JobTypeSummary',
    category_orders={'OpenedCuatrimester': [1, 2, 3]},
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'},
    title="Cantidad de reparaciones por cuatrimestre en 2023"
).update_traces(showlegend=False)  # Ocultar leyenda duplicada

# Gráfica para 2024
fig_cuatrimester_2024 = px.histogram(
    data_sayer2_2024,
    x='OpenedCuatrimester',
    color='JobTypeSummary',
    category_orders={'OpenedCuatrimester': [1, 2, 3]},
    color_discrete_map={'CORRECTIVO': 'midnightblue', 'PREVENTIVO': 'lightgray', 'OTROS': 'darkorange'},
    title="Cantidad de reparaciones por cuatrimestre en 2024"
).update_traces(showlegend=False)  # Ocultar leyenda duplicada

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
        ticktext=['Ene-Abr', 'May-Ago', 'Sep-Dic'],  # Etiquetas para cuatrimestres
        title_text="Cuatrimestre"
    ),
    xaxis2=dict(
        tickmode='array',
        tickvals=[1, 2, 3],
        ticktext=['Ene-Abr', 'May-Ago', 'Sep-Dic'],  # Repetir etiquetas para el segundo eje
        title_text="Cuatrimestre"
    ),
    xaxis3=dict(
        tickmode='array',
        tickvals=[1, 2, 3],
        ticktext=['Ene-Abr', 'May-Ago', 'Sep-Dic'],  # Repetir etiquetas para el tercer eje
        title_text="Cuatrimestre"
    ),
    yaxis_title="Cantidad de reparaciones",
    plot_bgcolor="white",
    paper_bgcolor="white",
    height=800,
    width=1700,
    margin=dict(t=50, l=50, b=50, r=50)
)

###############################################################Frecuencia por tipo de unidad 


# Preparar los datos para el histograma
# Filtrar datos para solo incluir mantenimientos correctivos
sayer_maint2_byUnit_corrective = sayer_maint2_byUnit_byRepReason[
                                    sayer_maint2_byUnit_byRepReason['JobTypeSummary'] == 'CORRECTIVO'].copy()

corrective_frequencies = (
    sayer_maint2_byUnit_corrective.groupby('UnitType')['RepairCount']
    .sum()
    .reset_index()
    .rename(columns={"RepairCount": "Frequency"})
)

# Crear la gráfica con Plotly Express
fig_corrective_histogram = px.bar(
    corrective_frequencies,
    x='UnitType',
    y='Frequency',
    color='UnitType',
    title='Frecuencia de mantenimiento correctivo por tipo de unidad',
    color_discrete_map={  # Asignar colores personalizados
        'TRACTOR': 'midnightblue',
        'TRAILER': 'lightgray',
        'DOLLY': 'darkorange'
    }
)

# Ajustar diseño
fig_corrective_histogram.update_layout(
    xaxis_title="Tipo de unidad",  # Etiqueta del eje X
    yaxis_title="Frecuencia",     # Etiqueta del eje Y
    title_font=dict(size=20),     # Tamaño de fuente del título
    plot_bgcolor="white",         # Fondo blanco para el área de trazado
    paper_bgcolor="white",        # Fondo blanco general
    margin=dict(l=50, r=50, t=50, b=50)  # Márgenes personalizados
)

# Configurar bordes de las barras
fig_corrective_histogram.update_traces(
    marker_line_color='black',  # Bordes negros para las barras
    marker_line_width=1.5       # Ancho del borde
)


#####################################################################################CANTIDAD ACUMULATIVA
# Ordenar los datos por fecha de apertura
data_sayer['OpenedDate'] = pd.to_datetime(data_sayer['OpenedDate'])  # Asegurarse de que OpenedDate sea datetime
df_temp = data_sayer.sort_values(by='OpenedDate')

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
    color_discrete_map={  # Asignar colores personalizados
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
    title_font=dict(size=20),
    margin=dict(t=50, l=50, b=50, r=50)
)

# Agregar líneas verticales en los meses clave
fig_cumulative.add_vline(x=4.5, line_width=1.5, line_dash="dash", line_color="lightgrey")
fig_cumulative.add_vline(x=8.5, line_width=1.5, line_dash="dash", line_color="lightgrey")
fig_cumulative.add_vline(x=12.5, line_width=1.5, line_dash="dash", line_color="lightgrey")

# Bordes en las líneas
fig_cumulative.update_traces(line=dict(width=3))

# Diccionario de gráficos para distintas rutas
figures = {
    # Figura de ejemplo
    "figure1": px.bar(df, x="Fruit", y="Amount", color="City", barmode="group"),
    
    # Figura de línea simple
    "figure2": px.line(data_sayer, x="lagdias", y="TOTAL"),
    
    # Figura de barras para el conteo de reparaciones por unidad
    "figure3": px.bar(
    filtered_data_with_repair,
    x='UnitID',
    y='RepairCount',
    title='Cantidad de reparaciones por unidad de la flota de Sayer Full'
).update_traces(
    marker_color=color_list_hex,  # Asignar colores interpolados
      # Bordes negros
    marker_line_width=1.5  # Ancho del borde
).update_layout(
    xaxis_title="Unidad",  # Etiqueta del eje x
    yaxis_title="Cantidad de reparaciones",  # Etiqueta del eje y
    title_font=dict(size=20),  # Tamaño de fuente del título
    xaxis=dict(
        categoryorder='total descending',  # Ordenar barras por RepairCount descendente
        showgrid=False,  # Quitar las líneas de la cuadrícula en el eje x
        tickmode='array',  # Mostrar solo etiquetas existentes
        tickvals=filtered_data_with_repair['UnitID'],  # Etiquetas visibles (únicamente las unidades con datos)
        ticktext=filtered_data_with_repair['UnitID'],  # Etiquetas visibles en el gráfico
    ),
    plot_bgcolor="white",  # Fondo blanco del área de trazado
    paper_bgcolor="white",  # Fondo blanco general
    barmode='group',  # Agrupación estándar de barras
    margin=dict(l=50, r=50, t=50, b=50)  # Reducir márgenes para que no quede espacio

    
),
    'figure4' : figure4,


    'figure5' : figure_cuatrimester,

    'figure6' : fig_corrective_histogram,

    'figure7' : fig_cumulative

}

####################################### Lógica de la App
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
    # Extract the figure name from the URL
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
                        'flex': '1 1 auto'
                    },
                ),
            ],
            className="graph-container",
            style={
                'margin': '0',
                'padding': '0',
                'width': '100%',
                'height': '90vh',
                'overflow': 'hidden',  # Prevent scrolling
                'display': 'flex',
                'flexDirection': 'column',
                'flex': '1 1 auto'
            },
        )

    # 404 - Page not found
    return html.Div("404: Figure not found", style={"textAlign": "center", "fontSize": "24px"})

if __name__ == '__main__':
    app.run_server(debug=False)
