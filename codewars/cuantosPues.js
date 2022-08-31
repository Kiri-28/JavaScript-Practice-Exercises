/**
 * Dado una lista de strings, devolver el número de coincidencias
 * @param {string[]} lista
 * @param {string} elemento de búsqueda
 * @returns {number} `number` devuelve el número de coincidencias del elemento en la lista
 */
function cuantasCoincidencias(lista, elemento) {
  // 1. Crear un contador de coincidencias
  let contador = 0;
  // 2. Recorrer la lista en buscar de ese elemento
  // e incrementar el contador de coincidencias cada vez que lo encuentras
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    if (element === elemento) {
      contador += 1;
    }
  }
  // 3. Devolver el contador de coincidencias
  return contador;
}

// ZONA DE PRUEBAS, NO MODIFICAR NADA A PARTIR DE AQUÍ
const listaDeLaCompra = ['lechuga', 'tomate', 'queso', 'tomate', 'pavo', 'queso', 'maiz', 'tomate', 'pollo', 'tomate'];
const fruta = 'queso';
const coincidencias = cuantasCoincidencias(listaDeLaCompra, fruta);
console.log(`El elemento "${fruta}" se repite ${coincidencias} veces en la lista.`);
