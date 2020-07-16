//Consumo del servicio de spotyfy para
//traer canciones de un artista

// Creamos un array que va a contener los links de las imagenes
const imagenes = []
//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1
// let imagen1 = document.getElementById("img1");

//1. Definir la URL del servicio de donde vamos a consumir los servicios
let url = "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz/top-tracks?country=us";

//2. Definir el token o permiso de acceso que lo sacamos de spotify
let token = "Bearer BQBcCPjMp6oNH_p-o0KopAvG-UHMpN6wa8W1tQuXEY0SsB3Jf5SS4ISq4VRR6vmpwkJtv9_IbEuDFf0X97WxAJgDg8-fI3wYS2G04O1NnWUiwIM5VOpNALocK3TnjaM-lvggNvbe3hPPQ5dsv4YN-7i4UjAzpWI";

//3.Definir Objeto AJAX
let objetoAJAX = new XMLHttpRequest();

//4. Abrir la conexion
objetoAJAX.open('GET', url, true);

//5. crear encabezado de conexion, el primer argumento es el nombre del encabezado y el segundo argumento es el valor de el encabezado, aca es donde van los permisos
objetoAJAX.setRequestHeader('Authorization', token);

//6. cargamos los datos del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);    
    console.log(respuesta);
    console.log(respuesta.tracks);
    console.log(respuesta.tracks[0]);
    console.log(respuesta.tracks[0].album);
    console.log(respuesta.tracks[0].album.images);
    console.log(respuesta.tracks[0].album.images[0]);
    console.log(respuesta.tracks[0].album.images[0].url);    
    // imagen1.src = respuesta.tracks[0].album.images[0].url;
    // document.getElementById('img1').src = respuesta.tracks[0].album.images[0].url

    // Asi recorremos las imagenes que trae e album numero 1
    let contador = 1
    for(let i of respuesta.tracks[0].album.images){
        document.getElementById(`img${contador}`).src = i.url
        contador += 1
    }


    //Asi tambien podemos recorrer las imagenes del album numero 1
    // respuesta.tracks[0].album.images.forEach(element => {
    //     console.log(element)
    // });    
}


//7. enviamos la peticion
objetoAJAX.send();