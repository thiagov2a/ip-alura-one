// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludar() {
  console.log('¡Hola, mundo!');
  return; // Esto es opcional, pero es buena práctica ponerlo.
}

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
  return;
}

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero) {
  return numero * 2;
}

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(num1, num2) {
  return Math.max(num1, num2);
}

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  return numero * numero;
}
