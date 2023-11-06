// Variables para tomar el valor del inmput, en este caso vacías
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

// Variables para el <p>, para luego transcribirlas
const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Variables para tomar el valor que el "range" establezca
let rojo = inputRojo.value; //En este caso toma el 23 que está establecido en el input
let verde = inputVerde.value; //Luego servirán para tomar el nuevo valor
let azul = inputAzul.value;

// Definiendo los textos en <p> = 23; 41; 56.
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// Función para actualizar los valores y definir el color RGB, también para poner dicha actualización en el body como fondo
function actualizarColor (rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// FREECODECAMP
// inputRojo.addEventListener("change", (e) => {
//   rojo = e.target.value;
//   textoRojo.innerText = rojo;
//   actualizarColor(rojo, verde, azul);
// });

// Funciones que actualizan el valor RGB cuando el "range" se mueve
function rojito(){
  rojo = inputRojo.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
}

function verdecito(){
  verde = inputVerde.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
}

function azulito(){
  azul = inputAzul.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
}

// Evento que ejecuta una fución cuando se mueve el "range"
inputRojo.addEventListener("change", rojito);
inputVerde.addEventListener("change", verdecito);
inputAzul.addEventListener("change", azulito);



