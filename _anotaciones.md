# Clase 22
- "npx" es un comando que reemplazo a "npm -g"
- ejecutar en la consola: 
	> npx create-react-app nombre-de-mi-app
- para correr la app, ejecutar en consola:
	> npm start


	# Clase 24
	
# Clase 27
	-	 import NombreDeLibreria from "ubicacion"
	- Si la libreria que se desea importar ya está referenciada en el package.json, no hace falta declarar el path exacto (ej "./src/mi-libreria")



# Clase 30
- generar un archivo por cada componente (dentro de /src)
* los nombres de los componentes SIEMPRE la primer letra con mayuscula (ej MiApp.js).
- dentro del archivo, importar las librerias que necesitas
- generar una funcion q represente el componente
- exportacion del componente
- la estructura basica de cualquier componente:
	>	importacion de librerias
	> generacion de la funcion del componente
	> exportacion del componente


# Clase 39
- Si importamos un archivo CSS en el JS, mediante import. Las clases estaran disponibles globalmente para cualquier otro componente de react.

# Clase 40
- Patron SOLID
	> lineamientos generales de como debemos desarrollar nuestra aplicacion.
	> S de SOLID es: single responsability 
	>


# Clase 52
- en esta clase instalamos la libreria prop-types


# Clase 76
- La propiedad "key" es necesaria cuando generamos componentes de forma dinamica.
- es un identificador que utiliza react para saber que elemento es cada uno.
- debe ser UNICA (entre elementos hermanos)
- debe ser ESTABLE (entre las renderizaciones)
