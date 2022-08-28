/**
 * Dado una lista de strings, devolver el número de coincidencias
 * @param {string[]} lista
 * @param {string} elemento de búsqueda
 * @returns {number} `number` devuelve el número de coincidencias del elemento en la lista
 */
function cuantasCoincidencias(lista, elemento) {

}

const listaTest = ['lechuga', 'tomate', 'queso', 'tomate', 'pavo', 'queso', 'maiz', 'tomate', 'pollo'];
const elementoTest = 'tomate';
const coincidencias = cuantasCoincidencias(listaTest, elementoTest);
console.log(`El elemento "${elementoTest}" se repite ${coincidencias} veces en la lista.`);
