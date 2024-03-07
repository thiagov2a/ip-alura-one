// 1. Crea una lista vacía llamada "listaGenerica".
const listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
const lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarElementosInverso() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarElementosMaxMin(lista) {
  let max = lista[0];
  let min = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > max) {
      max = lista[i];
    }
    if (lista[i] < min) {
      min = lista[i];
    }
  }
  console.log(`El número más grande es ${max} y el número más pequeño es ${min}`);
}

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementos(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i;
    }
  }
  return -1;
}

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
  let listaSumada = [];
  for (let i = 0; i < lista1.length; i++) {
    listaSumada.push(lista1[i] + lista2[i]);
  }
  return listaSumada;
}

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function calcularCuadrado(lista) {
  let listaCuadrada = [];
  for (let i = 0; i < lista.length; i++) {
    listaCuadrada.push(lista[i] * lista[i]);
  }
  return listaCuadrada;
}
