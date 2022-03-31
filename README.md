Se han definido las variables generales URL_DEFAULT, URL, ComprbarIP y map

Al cargar la página lo primero que veremos sera nuestra ubicación con la funcion "cargarDatos()".

Al introducir una IP, se enviará a la funcion cargarDatos() para evaluarla con la expression regular.

    -Si la ip esta vacia(normalmente cuando carga la página) se obtendran los datos de tu ubicación actual.

    -Si se da por válida la ip se enviaran los datos a las funciones MostrarDatos() y  CargarMapa

    -Cuando el usuario introduzca mal la ip, nos saldrá una alert.


La funcion mostrarDatos() introducirá los valores de los datos que recibamos en sus respectivas etiquetas.

La funcion cargarMapa() se encargará de mostrar la ubicacion de la ip que hemos pasado mediante la latencia y la longitud. 