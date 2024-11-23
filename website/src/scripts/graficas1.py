# Description: This script creates a Dash app that displays different figures based on the URL path.
# The figures are stored in a dictionary and the URL path is used to select the figure to display.
# The figures are created using Plotly Express and displayed using the Dash Graph component.

# Import the required libraries
from dash import Dash, html, dcc, Input, Output
import plotly.express as px
import pandas as pd

# Example data for figures
df = pd.DataFrame({
    "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],
    "Amount": [4, 1, 2, 2, 4, 5],
    "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]
})
df2 = pd.read_csv("./data_sayer.csv")
df3 = pd.read_csv("./data_sayer2.csv")
df4 = pd.read_csv("./data_sayer3.csv")
df5 = pd.read_csv("./data_sayer4.csv")
graph1 = px.bar(df2, x="UnitID", y="TOTAL")
graph2 = px.bar(df3, x='UnitID', y='RepairCount',
                title="Reparaciones por UnitID",
                labels={"x":"Unidad", "y":"Cuenta de reparaciones"},
                text_auto= True)

graph3 = px.histogram(df4, x="AvgHoursBetweenRepairs", 
                      title="Distribución de Tiempo promedio entre reparaciones", 
                      labels={"x":"Horas", "y":"Unidades"},
                      text_auto= True
                      )

graph4 = px.box(df4, x="AvgHoursBetweenRepairs", 
                      title="Boxplot de Tiempo promedio entre reparaciones",
                      points="all"
                      )

graph5 = px.histogram(df2, x="laghoras", 
                      title="Distribución de Tiempo promedio de reparaciones", 
                      labels={"x":"Horas", "y":"Unidades"},
                      text_auto= True
                      )

graph6 = px.box(df2, x="laghoras", 
                      title="Boxplot de Tiempo promedio de reparaciones",
                      points="all"
                      )

graph7 = px.histogram(df2, x="TOTAL",
                      title="Distribución de costos totales de mantenimiento",
                      labels={"x":"Costos", "y":"Frecuencia"},
                      text_auto = True
                      )

graph8 = px.histogram(df3, x="RepairCount",
                      title="Distribución de frecuencia de mantenimiento correctivo",
                      text_auto= True
                      )

graph9 = px.histogram(df5, x="RepairCount",
                      title="Distribución de frecuencia de mantenimiento preventivo",
                      text_auto= True
                      )

graph10 = px.box(df5, x="RepairCount",
                 title="Boxplot de Tiempo promedio de reparaciones preventivas",
                 points="all"
                 )

graph11 = px.line(df2, x="OpenedDate", y="TOTAL",
                  title="Costos 2022-2024",
                  labels={"x":"Tiempo", "y":"Costo"}
                  )

graph12 = px.bar(df2, y="Jobcode", x="TOTAL",
                 text_auto=True
                 )


# Dictionary of figures
figures = {

    "figure1": px.bar(df, x="Fruit", y="Amount", color="City", barmode="group"),

    "figure2": px.line(df, x="Fruit", y="Amount", color="City"),

    "figure3": graph1,

    "figure4": graph2,

    "figure5": graph3,

    "figure6": graph4,

    "figure7": graph5,

    "figure8": graph6,

    "figure9": graph7,

    "figure10": graph8,

    "figure11": graph9, 

    "figure12": graph10,

    "figure13": graph11,

    "figure14": graph12,

    "figure15": graph13

}

# ======================================== App Logic =============================================

# Create the Dash app
app = Dash(__name__)

# Define layouts for different routes
app.layout = html.Div(children=[
    dcc.Location(id='url', refresh=False),  # Tracks the URL
    html.Div(id='page-content')  # Content for each route
])

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
                        "width": "97vw",
                        "height": "95vh",
                    },
                ),
            ],
            style={
                "width": "97vw",
                "height": "95vh",
            },
        )

    # 404 - Page not found
    return html.Div("404: Figure not found", style={"textAlign": "center", "fontSize": "24px"})

if __name__ == '__main__':
    app.run_server(debug=False)
