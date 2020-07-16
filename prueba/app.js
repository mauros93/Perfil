let padre = document.getElementById('padre')

// //Creamos un div con la clase row
let div_row = document.createElement('div').classList.add("row")

// //Creamos un div con la clase col
let div_col = document.createElement('div')
div_col.classList.add("col-4")
let new_h1 = document.createElement('h1')
var a = document.createAttribute("miAtributo");
a.value = "nuevoVal";
new_h1.setAttributeNode(a)
console.log(new_h1)
let contenido1 = document.createTextNode("Hola Mundo1!");
// new_h1.appendChild(contenido1)
div_col.appendChild(new_h1)
// padre.appendChild(new_h1)
// div_col.document.createAttribute("miAtributo")

console.log(div_col)


// Crear nodo de tipo Element
var parrafo = document.createElement("p");
	
// Crear nodo de tipo Text
var contenido = document.createTextNode("Hola Mundo!");
	
// Añadir el nodo Text como hijo del nodo tipo Element
parrafo.appendChild(contenido);
	
// Añadir el nodo Element como hijo de la pagina
// padre.appendChild(parrafo);