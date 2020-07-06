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
- Se genera un hook para que el menú del sitio se vuelva flotante y cuando realizmaos el scroll.
- Generar el customHook useCategoriesData para la carga de datos con un loading para el componente ListOfCategory.
- Creación de un lazy load para el componente PhotoCard.

### 4.1 Polyfill

- Instalación de la dependencia interseccion-observer
  - npm i intersection-observer
- Instalar babel plugin-syntax-dynamic-import
  - npm i @babel/plugin-syntax-dynamic-import --save-dev
- Instalar bael-eslint
  - npm i babel-eslint --save-dev
- Modificar el archivo de webpack para usar el plugin-syntax-dynamic-import
  ````
  options: {
            plugins: [
              '@babel/plugin-syntax-dynamic-import'
            ],
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
  ````
- Modificar el archivo packge.json
  ````
  "eslintConfig": {
        "parser": "babel-eslint",
        "extends": [
            "./node_modules/standard/eslintrc.json"
        ]
    }
  ````
- Estos componentes se instalan para poder usar polyfill de intersection observer en cualquier navegador en el componente PhotoCard, ya que esta sintaxis que se utiliza aun esta en face experimental de javascript

### 4.3 localStorage

- Se crea una función que permita guadar los likes en la loclaStorage del navegador del componente PhoteCard

### 4.4 CustomHooks

- Separamos la logia del componente PhotoCard para gnerar dos nuevos hook useLocalStorage y UseNearScreen, lo cual nos permitira usar estos hooks en otros componentes.

### 5.1 GraphQl y React Apollo

- instalación de graphql y react apollo
  - npm i apollo-boost react-apollo graphql
- Modificación del archivo src/index.js para consumir el servicio de apollo
- Modificación del archivo ListOfPhotocards para el consusmo de datos con GraphQL

### 5.2-Parametros-GraphQL

- Generar un hoc de wihtPhotos del componente ListOfPhotoCard
- Generar el src/container/ListOfPhotoCardas.js

### 5.3-renderProps

- Modificación del componente PhotoCard para ir a un querystring (/?detail=${id})
- Creacion del archivo /src/container/PhotoCardWithQuery.js, el cual trae la información del elemento que seleccionamos en pantalla
- Modificamos el archivo /src/App.js para trearnos el container de PhotoCardWithQuery si hemos seleccionado un elemento

### 5.4-refactorización

- A los componentes con querys como buena practica se les debe dar un nombre en mayúsculas para identificarlos
  ```
  const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
  `
  ```
- Se puede generar un archivo con la query en su interior para tener un código más limpio
- Tener las renderProps fuera del componente a renderizar

### 5.5-mutaciones

- Generar el componente src/components/FavButton.js y src/container/ToggleLikeMutation.js
- Extrae el boton del componente PhotoCard y pasarlo al componente FavButton
- Generar la mutación de los likes en el componente ToggleLikeMutation
- Importar los nuevos componentes en  PhotoCard para su uso

### 6.1-ReachRouter

  - instlación de reach-router
      - npmi @reach/router
  - Crear la carptea page para alojar todas las páginas que utilicemos /src/page
  - Crear el archivo Home.js dentro de page y mover todo lo que le corresponde al home que se encuntra en el archivo src/App.js
  - Modifcar el archivo ListOfCategories para incluir el path de la ruta
  - Modificar el archivo Home.js para resivir el nuevo path de manera dinámica

### 6.1-Links

  - Import el componente de Link de Reach router en el styles.js de Category y en index.js de Logo
  - En styles.js modificar el uso de Anchor por Link
  - Modificar el componete de Categoria para el uso de Link
  - En el componente de logo utilizar el componente de Link para que encierre el logo
  - Generar componente /src/page/Details.js
  - Agregado el link correspondiente para PhotoCard
  - Generar en componente Navbar y agregarlo al componente App.js
  - Crear las páginas de Favs.js, User.js y NotRegisteredUser.js
  - Agregar los componentes creados anteriormente en App.js y una pequeña función para indicar que el usuario no esta logueado.

### 7.1-Gestion de usuarios

  - Crear el componente src/Context.js
  - importar el componente Context.js en los componentes a usar (index.js, App.js y NotRegisteredUser.js)
  - Crear formulario de loguin (UserFomr) y el customHooks para los inputs (useInputValue.js)
  - Se generan los estilos para los formularios de inciar sesión y registrar
  - Generar el container RegisterMutation.js para la manipulación de los datos del registro del usuario y estos se envien por grahpql y nos permita acceder como usario registrado.
  - Agregar el container RegisterMutation al componete NoRegisterUser para poder usarlo en el formulario de registro.
  - Manipulación de errores al registarse en NotRegistedUser.js y manejo del loading para bloquear los campos para que el usuario no pueda editarlos.
  - Creación del componente LoginMutation.js para el inicio de sesión.
  - Manejo de la sessionStorage para guaradr el token de sesión para permanecer logueados a pesar de refrescar pantalla (NotRegisteredUser.js, Context.js).
  - Modificar la función de los likes para que solo el usario logueado pueda hacer likes y expirar el token.
  - Modificación del Favs para traer los favoritos selecionados, creación del container GetFavorites.js que utilizar el componente ListOfFavs.
  - Se crea el componente SubmitButton para hacer generico los botones de Registarse, Loguin y cerrar sesión, se genera el boton de cerrar sesión en la pagina de User, por ultimo generar el removeAuth en el Context.js

### 8.1-Retoque-rutas

  - Creación de la pagina NotFound.js
  - Modificación de la rutas para cuando el usuario esta autenticado o no

### 8.2-React-Helmet
  - instalar react helmet
    - npm i react-helmet
  - Generar el componente Layout para el uso de helmet
  - Insertar el Layout en las paginas donde queramos usar helmet

### 8.3-Performance
  - Generar script en package.json para ejecución de la aplicación de producción en modo desarrollo
    ```
    "build:dev": "webpack --mode development",
    "start:dev": "npx serve dist -s",
    "server:dev": "npm run build:dev && npm run start:dev"
    ```
  - Utilizar el inspector de elementos con el plugin de React Developer Tools para analizar los renderizados de la aplicación
  - Aplicar React.memo para evitar renderizados inecesarios (ListOfCategories y Home.js)

### 8.4-React-lazy

  - En el componente App dejamos de importar las páginas que usamos normalmente y creamos una constante con el nombre de la página e imporgandola con React.lazy()
  ```
  const Favs = React.lazy(() => import('./page/Favs'))
  ```
  - Todo el componente que retorno tiene que estar envuelto por:
  ```
  <Suspense fallback={<div />}> </Suspense>
  ```
  El cual utiliza la prop fallback el cual indica que elemento se esta renderizando mientras se carga el componente, en este caso es un div
  - Las páginas que renderizaremos por este método se les tendra qeu cambiar su export cont name por export default (), esto porque dentro del componente App.js ya le estamos asignado un nombre.

### 8.4-PropTypes
  - Instalar prop-types
  ```
  npm i prop-types
  ```
  - En el componente FavButton agregamos el código para el uso de proptypes
  ```
  import PropTypes from 'prop-types'

  FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }
  ```
  - Los prop-types solo son de desarrollo

### 8.4-PWA
  - Agregar la etiqueta noscript en el archivo index.html
  - Instalar un plugin de webpack para pwa
  ```
  npm install webpack-pwa-manifest -D
  ```
  - Modificar el archivo webpack.config.js
  ```
  const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
  const path = require('path')

  new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de ftoos de mascotas',
      shortname: 'Petgram 🐶',
      description: 'Con Petgram puedes encontrar fotos de animales domésticos my fácilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ```
  - instalación de la herramienta workbox para soporte online
  ```
  npm i workbox-webpack-plugin -D   
  ```
  - Modificar el archivo webpack.config.js
  ```
  const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

  new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server-carlos-p.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ```
