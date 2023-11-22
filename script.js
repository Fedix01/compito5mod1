/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazySum(x, y) {
//     if (x === y) {

//         return (x += y) * 3
//     }
//     console.log(x + y)
// }
// let finalCrazySum = crazySum(5, 5);
// console.log(finalCrazySum)
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function boundary(n) {
//     if (n > 20 && n <= 100) {
//         return true
//     } else if (n === 400)
//         return 400

// }
// let finalBoundary = boundary(30);
// console.log(finalBoundary)
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function reverseString(string) {
//     return string.split("").reverse().join("")
// }
// console.log(reverseString("EPICODE"));
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function upperFirst(mystring) {
//     let stringa = mystring.split(" ");
//     for (let i = 0; i < stringa.length; i++) {
//         stringa[i] = stringa[i][0].toUpperCase() + stringa[i].substr(1);
//     }
//     return stringa.join(" ");
// }
// let newstring = upperFirst("ciao mi chiamo carlo");
// console.log(newstring)
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let array = [];
// function giveMeRandom(n) {

//     for (let x = 0; x < 10; x++) {
//         n.push(Math.round(Math.random() * 10))
//     } return n
// }
// let newGiveMeRandom = giveMeRandom(array);
// console.log(newGiveMeRandom);
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function area(l1, l2) {
//     if (l1 > l2 || l1 < l2) {
//         return l1 * l2
//     } else
//         return "Non è un rettangolo"
// }
// let finalArea = area(5, 6);
// console.log(finalArea)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let numb = 19;
// function crazyDiff(n, numb) {
//     let x = n - numb;
//     if ((x + numb) > numb) {
//         return x * 3;
//     } else if (x < numb)
//         return x;
// }
// let finalCrazyDiff = crazyDiff(22, numb);
// console.log(finalCrazyDiff)
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let myString = "";
// function codify(myString) {
//     let x = myString
//     if (myString === "code") {
//         return myString;
//     } else if (myString !== "code")
//         return "code" + x;
// }
// let newCodify = codify("paperino");
// console.log(newCodify)
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function check3and7(n) {
//     if (n % 3 === 0 || n % 7 === 0) {
//         return true
//     } else
//         return false
// }
// let newCheck3and7 = check3and7(14);
// console.log(newCheck3and7)
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function cutString(myStr) {
//     return (myStr.slice(1, -1))
// }
// let finalCutString = cutString("Paperino");
// console.log(finalCutString)