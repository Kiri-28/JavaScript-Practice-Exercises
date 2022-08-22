/**
 * Crear una función `esPalindromo()` que recibe un parámetro `palabra: string` 
 * y devuelve un `boolean` indicando si `palabra` es un palíndromo.
 * 
 * Palíndromo: Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda.
 * Ejemplos: "oso" ; "anilina" ; "dábale arroz a la zorra el abad"
 */
function esPalindromo(palabra) {
    // 1. Crear una variable para rellenarla con la palabra dada la vuelta (`reverse()`)
    let revPalabra = '';

    // 2. Recorrer la palabra de atrás adelante para guardarla del reves
    for (let index = palabra.length; index <= 0; index--) {
        revPalabra = palabra[index];
    }

    console.log(revPalabra);

    // Siguientes pasos ...

    // Devolver resultado
}

// Variables de testing
// PALÍNDROMOS
const oso = 'oso';
const anilina = 'anilina';
const frasePalindromo = 'dabale arroz a la zorra el abad';  // He quitado la tilde para simplificar
// NO PALÍNDROMOS
const arroz = 'arroz';
const fraseNoPalindroma = 'una vaca vestiada de uniforme';

esPalindromo(oso);