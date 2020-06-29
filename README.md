# curso-platzi-react-avanzado ⚛️

¡Sígueme en Youtube! https://www.youtube.com/midudev

Repositorio con el código del [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)

### 2.1 Entrono de Desarrollo

-   Instalación de webpack y webpack-cli

    -   npm i webpack wepack-cli --save-dev

-   Creación de la carpeta src y archivo index.js /src/index.js

-   Creación del archivo /webpack.config.js

-   Instalación de html-webpack-plugin y webpack-dev-server

    -   npm i html-webpack-plugin webpack-dev-server --save-dev

-   Añadir el script de ejecución de webpack-dev-server en el package.json

### 2.2 Entrono de Desarrollo

Para renderizar elementos html dentro de un archivo js necesitamos instalar babel para poder compilar el código correctamente

-   Instalacion de las depenednecia de babel para utilizar JSX en nuestro proyecto
    -   npm i @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
-   Configuración de webpack.config.js para utilizar los loaders de babel

```
module: {
    rules: [
      {
        test: /\.js$/, // para los archivos que terminan con la extensión JS
        exclude: /node_modules/, // excluimos los directorios de node_modules
        use: {
          loader: 'babel-loader', // usamos el loader de Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
```
### 2.3 Entrono de Desarrollo

- Instalación de StandardJS para la busqueda de errores en el código y tener estandarizado el proyecto
  - npm i standard --save-dev

- Modificación del archivo package.json para la busqueda de errores en el código, manula y automaticamente y omitir la carpeta de api
```
    "standard": {
        "ignore": [
            "/api/**"
        ]
    },
    "eslintConfig": {
        "extends": [
            "./node_modules/standard/eslintrc.json"
        ]
    }
```
- Tener instalado las extenciones de Eslint y Prettier en VSCode
- agregar las siguientes lineas en el archivo settings.json de VSCode si no las tiene

```
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
    "eslint.format.enable": true,
    "prettier.eslintIntegration": true,
```
- Deploy del front y back del proyecto en Vercel
  - Instalar vercel de manera global en la linea de comandos.
    - npm i -g vercel
  - Despues de instalar vercel iniciar seción en vercel.com con tu cuenta de github (si no tiene cuenta abrir una).
  - En la línea de comandos loguearte a la cuenta de vercel con 'vercel login' y solicitara tu correo de la cuenta de github para verificar tu usuario.
  - Te enviaran un correo electronica a tu cuenta de correo con link para la autenticación y poder loguarte a tu cuenta.
  - El archivo api/vercel.json tiene la configuración del proyecto para realiar el deploy.
  - En la línea de comandos entrando a la carpeta api ejecutaremos el comando vercel para realizar el deploy al servidor.
  - Regresando a la raíz del proyecto de front crearemos el archivo vercel.json con la siguente información:
  ```
  {
    "version": 2, //versión del proyecto de la api a usar
    "name": "petgram",
    "builds":[
      {
        "use": "@vercel/static-build",
        "src": "package.json"
      }
    ],
    "routes":[
      {
        "src": "(.*).js", "dest": "/$1.js"
      },
      {
        "src": "(.*).json", "dest": "/$1.json"
      },
      {
        "src": "/.*", 
        "dest": "/index.html"
      }
    ]
  }
  ```
  - Al archivo package.json agregamos el la siguiente instrucción:
    - "vercel-build": "npm run build",
  - Esto para que haga build del proyecto y realicé el deploy a Vercel.
  - Ejecutamos en líena de comandos Vercel para hacer el deploy y nos deberia de regresar una url para ver el proyecto, y en nuestra cuenta de Vercel podremos ver los deploy realizados.

### 3.1 interfaz con styled-component
- Instlacion de styled-components
  - npm i styled-components
- Creación de los archivos de Category
  - /src/components/Category/index.js
  - /src/components/Category/styles.js
- Creación del archivo App que manda llamar al componente Category.
  - /src/App.js
- Modificamos el archivo index.js para llamar al archivo App.js

### 3.2 interfaz con styled-component

- Creación del componente ListOfCategories
  - /src/components/ListOfCategories/index.js
  - /src/components/ListOfCategories/styles.js
- Creación del archivo Globalstyles que contiene los estilos globales de la aplicación
  - /src/GlobalStyles.js
- Agregar estos componetes al archivo /src/App.js

### 3.3 interfaz con styled-component

- import el archivo JSON de la carpeta api en el archivo de ListOfCategories para simular el consumo de datos

### 3.4 interfaz con styled-component

- Generar los componentes de PhotoCard y ListPhotoCard
  - /src/components/PhotoCard/index.js
  - /src/components/PhotoCard/styles.js
  - /src/components/ListPhotoCard/index.js

### 3.5 interfaz con styled-component

- Subir componente SVG del logo y usar en App.js
- Animación con keyframes en PhotoCard.js
  - src/styles/animation.js

### 4.1 Hooks

- Generamos un hook para el componente ListOfCategories el cual nos permite traer nuestra información de una url y transformarla en un json.
- Se genera un hook para que el menú del sitio se vuelva flotante y cuando realizmaos el scroll
- Generar el customHook useCategoriesData para la carga de datos con un loading para el componente ListOfCategory
- Creación de un lazy load para el componente PhotoCard