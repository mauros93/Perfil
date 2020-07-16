//Consumo del servicio de spotyfy para traer canciones de un artista


//1. Definir la URL del servicio de donde vamos a consumir los servicios
let url = "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz/top-tracks?country=us";
let url1 = "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz"

//2. Definir el token o permiso de acceso que lo sacamos de spotify
let token = "Bearer BQDcLK5LDU6lHxZFzwxfpfqr6DaGIJpHqEefrsmHHAMPuvwUChvL0lpjsAF8p-zdqkV9izORA3hW6jx63VUTr9BPHpsHL-rF_o_nZ6tyZBRYucPgwe6Qfl6_wO1zROi3NhWmj6u3iHKLHnfx_3qVnVxt5gEE3SA";

//3.Definir Objeto AJAX, creamos 2 uno para sacar informacion de la canciones y otro para sacar informacion del artista
let objAjax = new XMLHttpRequest();
let obj1Ajax = new XMLHttpRequest();

//4. Abrir la conexion
objAjax.open('GET', url, true);
obj1Ajax.open('GET', url1, true);

//5. Asi creamos los permisos para poder obtener acceso a los datos
objAjax.setRequestHeader('Authorization', token);
obj1Ajax.setRequestHeader('Authorization', token);

// Como voy a poner lo que dura cada cancion creo una funcion para convertir milisegundos a minutos y segundos
function convertMillisecondsToMinutes(ms) {     
    minutes = Math.floor(ms/60000), // 1 Minutes = 60000 Milliseconds 
    seconds = Math.floor((ms % 60000)/1000 )// 1 Second = 1000 Milliseconds 
    if (seconds < 10 ){
        return  minutes + ":0" + seconds
    }else{
        return  minutes + ":" + seconds
    }           
}

//Con el objeto que hace referencia al artista ponemos datos del artista en la pagina
obj1Ajax.onload = function(){
    let respuesta = JSON.parse(this.responseText)  
    console.log(respuesta)
    document.getElementById('title').textContent = respuesta.name
    document.getElementById('artist').textContent = respuesta.name      
    document.getElementById('img1').src = respuesta.images[0].url
    document.getElementById('icon').href = respuesta.images[0].url
}

//6. cargamos los datos del servicio
objAjax.onload = function() {

    let respuesta = JSON.parse(this.responseText); 
    let respuesta1 = JSON.parse(this.responseText)  
    console.log(respuesta) 

    //Aca obtendremos arrays con las eqtiquetas de donde vamos a poner el nombre, duracion y link cancion completa    
    const nombreCanciones = document.getElementById('cards').getElementsByClassName('card-title')
    const duracionCanciones = document.getElementById('cards').getElementsByClassName('list-group-item')
    const linkCanciones = document.getElementById('cards').getElementsByTagName('a')
    const audios = document.getElementById('cards').getElementsByTagName('audio')

    //Asi creamos una coleccion que va a tener las etiquetas img que estan dentro de las cards
    let links = document.getElementById('cards').getElementsByTagName('img')

    //Asi convertimos la coleccion a un arreglo
    links = Array.from(links)
    
    for(let i = 0; i < 3; i++){
        links[i].src = respuesta.tracks[i].album.images[0].url
        audios[i].src = respuesta.tracks[i].preview_url
        nombreCanciones[i].textContent = respuesta.tracks[i].name
        duracionCanciones[i].textContent = `Duracion:  ${convertMillisecondsToMinutes(respuesta.tracks[i].duration_ms)}`
        linkCanciones[i].href = respuesta.tracks[i].external_urls.spotify        
    }     
}

//7. enviamos la peticion
obj1Ajax.send();
objAjax.send();
