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