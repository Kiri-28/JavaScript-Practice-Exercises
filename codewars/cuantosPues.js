/**
 * Dado una lista de strings, devolver el número de coincidencias
 * @param {string[]} lista
 * @param {string} elemento de búsqueda
 * @returns {number} `number` devuelve el número de coincidencias del elemento en la lista
 */
function cuantasCoincidencias(lista, elemento) {
    // 1. Crear un contador de coincidencias

    // 2. Recorrer la lista en buscar de ese elemento
    // e incrementar el contador de coincidencias cada vez que lo encuentras
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if (element === elemento) {
            return (coincidencias);
        }
    }

    // 3. Devolver el contador de coincidencias
}















// ZONA DE PRUEBAS, NO MODIFICAR NADA A PARTIR DE AQUÍ
const listaDeLaCompra = ['lechuga', 'tomate', 'queso', 'tomate', 'pavo', 'queso', 'maiz', 'tomate', 'pollo', 'tomate'];
const fruta = 'tomate';
const coincidencias = cuantasCoincidencias(listaDeLaCompra, fruta);
console.log(`El elemento "${elementoTest}" se repite ${coincidencias} veces en la lista.`);
