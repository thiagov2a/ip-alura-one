let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function mensajeEnConsola() {
  console.log('El botón fue clicado');
}

function mensajeEnPrompt() {
  let ciudad = prompt('Ingrese una ciudad de Brasil');
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

