// Ejercicio: factorial de un número
// Pseudocódigo:
// 1. Pedir un número al usuario
// 2. Convertirlo a number y verificar que sea un número válido
// 3. Si es negativo o decimal, avisar que no se puede
// 4. Poner resultado = 1
// 5. Repetir desde 1 hasta el número: resultado = resultado * i
// 6. Mostrar el resultado en la consola y en la página

const btnProbar = document.getElementById("btnProbar");
const resultado = document.getElementById("resultado");
const historial = document.getElementById("historial");

// Usa BigInt para que el resultado sea exacto, sin notación científica
function calcularFactorial(n) {
  let factorial = 1n;

  for (let i = 1n; i <= BigInt(n); i++) {
    factorial = factorial * i;
  }

  return factorial;
}

function probarNumero() {
  const texto = prompt("Escribe un número entero para calcular su factorial:");

  // Si la persona le da cancelar
  if (texto === null) {
    return;
  }

  const numero = Number(texto);

  // Verificar que sea un número
  if (texto.trim() === "" || isNaN(numero)) {
    resultado.textContent = "Eso no es un número, intenta de nuevo.";
    console.log("Error: el valor ingresado no es un número");
    return;
  }

  if (numero < 0) {
    resultado.textContent = "El factorial no existe para números negativos.";
    console.log("Error: número negativo");
    return;
  }

  if (!Number.isInteger(numero)) {
    resultado.textContent = "Escribe un número entero, sin decimales.";
    console.log("Error: número decimal");
    return;
  }

  if (numero > 1000) {
    resultado.textContent = "Ese número es muy grande, escribe uno hasta 1000.";
    console.log("Error: número mayor a 1000");
    return;
  }

  const factorial = calcularFactorial(numero);
  const mensaje = numero + "! = " + factorial.toString();

  console.log(mensaje);
  resultado.textContent = mensaje;

  const item = document.createElement("li");
  item.textContent = mensaje;
  historial.appendChild(item);
}

btnProbar.addEventListener("click", probarNumero);

// Pruebas en consola
console.log("4! =", calcularFactorial(4).toString());
console.log("5! =", calcularFactorial(5).toString());
console.log("0! =", calcularFactorial(0).toString());