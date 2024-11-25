# Uso del aplicativo de Hallazgos - TDR Full Sayer

## Instalacion

De querer ejecutar este aplicativo web es necesario seguir una serie de consideraciones fundamentales
para la inicializacion del programa.

### Python
Python es un lenguaje de programación fundamental en este proyecto debido a su versatilidad y amplia adopción en el análisis de datos y desarrollo web. Gracias a su colección de bibliotecas y frameworks, Python permite una rápida implementación de funcionalidades complejas, facilitando tanto el procesamiento de datos como la creación de interfaces de usuario interactivas. En este proyecto, Python se utiliza para manejar y transformar datos, así como para generar visualizaciones que ayudan en la toma de decisiones informadas.

1. En el sistema que se vaya a desplegar el aplicativo debe contar con una version reciente de [python](https://www.python.org/downloads/)

    - Para asegurarse de que se tiene una version de Python, se puede utilizar el siguiente comando en una terminal del Sistema Operativo:

    ```
    python --version
    ```

2. Ademas, debe contar con algunas librerias de python como el instalador de paquetes de python.

    - Para asegurarse de que se tiene una version de pip (python install packages), se puede utilizar el siguiente comando en una terminal del Sistema Operativo:

    ```
    python -m pip --version
    ```

    - En caso de que no se tenga, se puede instalar ejecutando los siguientes comandos en una terminal
    del Sistema Operativo

    ```
    curl -O https://bootstrap.pypa.io/get-pip.py
    ```

    ```
    python get-pip.py
    ```


3. Con el instalador de paquetes de python (pip) es necesario instalar algunas librerias del aplicativo:

    ```
    pip install pandas matplotlib dash
    ```

### Node
Node.js es un entorno de ejecución para JavaScript que permite construir aplicaciones de red escalables y eficientes. En este proyecto, Node.js se utiliza junto con React, una biblioteca de JavaScript para construir la interfaz de usuario. React facilita la creación de componentes reutilizables y la gestión del estado de la aplicación, lo que resulta en una experiencia de usuario más dinámica y receptiva. Es indispensable para ejecutar
nuestro aplicativo web, su instalacion depende del sistema operativo a utilizar.

#### Windows

```
Set-ExecutionPolicy Bypass -Scope Process -Force; `
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

```
choco install nodejs
```

#### macOS

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```
brew install node
```

#### Linux

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

```
source ~/.bashrc
```

```
nvm install node
```

**Verificacion de las versiones de node y npm**

```
node -v
npm -v
```

1. En una nueva terminal del sistema operativo, dirigirse a la ruta del repositorio `/TI3001C/website/`

2. Instalar los recursos  del aplicativo
```
npm install
```
***[Nota]*** **Este ultimo paso tarda considerablemente (1 - 25min) dependiendo de las especificaciones del sistema operativo, se recomienda tener paciencia.**


## Ejecucion

Para la ejecucion de este aplicativo, deben iniciarse 2 procesos dentro de este repositorio

### BackEnd (graficas)

1. En una nueva terminal del sistema operativo, dirigirse a la ruta del repositorio `/TI3001C/website/src/scripts/`

2. Ejecutar el proceso
```
python graficas.py
```

### FrontEnd (pagina web)

1. En una nueva terminal del sistema operativo dirigirse a la ruta del repositorio `TI3001C/webiste/`

2. Ejecutar el proceso
```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.