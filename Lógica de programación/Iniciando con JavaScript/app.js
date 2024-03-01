let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(`Adivina el número entre 1 y ${numeroMaximoPosible}:`));

  if (numeroUsuario == numeroSecreto) {
    alert(`Ganaste, el número es: ${numeroUsuario}. Lo adivinaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert(`El número es menor que ${numeroUsuario}`);
    } else {
      alert(`El número es mayor que ${numeroUsuario}`);
    }
    intentos++;

    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
      break;
    }
  }
}
