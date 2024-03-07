// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
  const imc = peso / (altura * altura);
  return imc;
}

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolares(dolares) {
  const cotizacionDolar = 4.8;
  const reales = dolares * cotizacionDolar;
  return reales;
}

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaPerimetro(altura, anchura) {
  const area = altura * anchura;
  const perimetro = 2 * (altura + anchura);
  return `El área es ${area} y el perímetro es ${perimetro}`;
}

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaPerimetroCirculo(radio) {
  const area = Math.PI * radio * radio;
  const perimetro = 2 * Math.PI * radio;
  return `El área es ${area} y el perímetro es ${perimetro}`;
}

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function calcularTablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
