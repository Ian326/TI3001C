from dash import Dash, html, dcc, Input, Output
import plotly.express as px
import pandas as pd

# Create the Dash app
app = Dash(__name__)

# Example data for figures
df = pd.DataFrame({
    "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],
    "Amount": [4, 1, 2, 2, 4, 5],
    "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]
})

# Predefined figures
figures = {
    "figure1": px.bar(df, x="Fruit", y="Amount", color="City", barmode="group"),
    "figure2": px.line(df, x="Fruit", y="Amount", color="City"),
}

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
        return html.Div(
            children=[
                dcc.Graph(
                    id=f"{figure_name}-graph",
                    figure=figures[figure_name],
                    style={
                        "width": "97vw",
                        "height": "95vh",
                        "boxSizing": "border-box"
                    },
                ),
            ],
            style={
                "width": "97vw",
                "height": "95vh",
                "boxSizing": "border-box"
            },
        )

    # 404 - Page not found
    return html.Div("404: Figure not found", style={"textAlign": "center", "fontSize": "24px"})

if __name__ == '__main__':
    app.run_server(debug=False)
