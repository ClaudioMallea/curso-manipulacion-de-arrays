const letters = ['a', 'b', 'c'];
// for(let index=0; index<letters.length;index++) {
//     const element = letters[index];
//     console.log(element);
// }
//malo, 4 lineas

letters.forEach(function(e){console.log(e)})
//mucho mejor, 1 sola linea
letters.forEach((e)=>{console.log(e)})
//mejor, con funcion anonima