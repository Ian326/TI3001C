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

# Dictionary of figures
figures = {

    "figure1": px.bar(df, x="Fruit", y="Amount", color="City", barmode="group"),

    "figure2": px.line(df, x="Fruit", y="Amount", color="City"),

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
