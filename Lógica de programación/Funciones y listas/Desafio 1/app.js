let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function mensajeEnConsola() {
  console.log('El botón fue clicado');
}

function mensajeEnAlert() {
  alert('Yo amo JS');
}

function mensajeEnPrompt() {
  let ciudad = prompt('Ingrese una ciudad de Brasil');
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function suma() {
  let num1 = prompt('Ingrese el primer número a sumar: ');
  let num2 = prompt('Ingrese el segundo número a sumar: ');
  let resultado = parseInt(num1) + parseInt(num2);
  alert(`El resultado de la suma es: ${resultado}`);
}

