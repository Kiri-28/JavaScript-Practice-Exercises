/**
 * Dado una lista de strings, devolver el número de coincidencias
 * @param {string[]} lista
 * @param {string} elemento de búsqueda
 * @returns {number} `number` devuelve el número de coincidencias del elemento en la lista
 */
const listaTest = ['lechuga', 'tomate', 'queso', 'tomate', 'pavo', 'queso', 'maiz', 'tomate', 'pollo', 'tomate'];
const elementoTest = 'tomate';

function cuantasCoincidencias(lista, elemento) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    if (element === elementoTest) {
      return (coincidencias);
    }
  }
}

const coincidencias = cuantasCoincidencias(listaTest, elementoTest);
console.log(`El elemento "${elementoTest}" se repite ${coincidencias} veces en la lista.`);
