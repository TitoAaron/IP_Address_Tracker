// Suerte!

const URL_DEFAULT = "https://ipgeolocation.abstractapi.com/v1/?api_key=f62c08003cb646dcb698199c8a40cc6f"; // Esta URL nos mostrara nuestra geolocalización
let URL = ""; //Aqui pondremos la url + la ip que nos pasen.

let map; //inicializar el contenedor map 


window.onload = () => {

    cargarDatos(); //al cargar la página lo primero que veremos sera nuestra ubicación.

    document.querySelector(".search_button").addEventListener("click" , ()=>{ 
            let IP = document.querySelector(".ip_input").value;
            cargarDatos(IP);
    })
}

function CargarMapa(lat,lng){ //Pasaremos la latencia y la longitud a esta función

if (map != undefined) { map.remove(); } //comprobamos si existe un "map" inicializado, si es el caso, lo borramos y creamos uno.

    zoom = 10;
    map = L.map('map').setView([lat, lng], zoom); //Establecemos el mapa.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
    .addTo(map);
    L.marker([lat, lng])
    .addTo(map);
}

function MostrarDatos(datos){ //Aqui "pintaremos" el dom
    document.querySelector(".ip_address").textContent = datos.ip_address;
    document.querySelector(".location_value").textContent = datos.city;
    document.querySelector(".time_zone_value").textContent = datos.timezone.current_time
    document.querySelector(".isp_value").textContent = datos.connection.isp_name;
}

async function cargarDatos(ip){ //Aqui recogeremos la IP
    let req;
    if(!ip == ""){ 
        let req;
        URL = URL_DEFAULT + "&ip_address=" + ip; //Añadiremos la ip a la URL.
        req = await fetch(URL); //Hacemos una request para obtener el json con los datos.
        req = await req.json();
        MostrarDatos(req);
        CargarMapa(req.latitude, req.longitude);
        
    }else{
        req = await fetch(URL_DEFAULT);
        req = await req.json();
        MostrarDatos(req);
        CargarMapa(req.latitude, req.longitude);
    }

}





