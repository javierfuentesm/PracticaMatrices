

/*  las celulas con uno estan vivas estan con unos y muertas con ceros 

  Regla mis 2 vecinos , una celula viva puede revivir a sus vecinos mas cercanos
  sus vecinos mas cercanos son derecha e izquierda 

  el numero total de celulas que van a revivir  */




var matrix = [
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0]
];


function vida(matrix) {
    var aux =matrix;
  var contador=0;
  for (let row = 0; row < matrix.length; row++) {
    for (let element = 0; element < matrix[0].length; element++) {
      if (matrix[row][element] === 1) {
        if (
          matrix[row][element + 1] === 0 &&
          typeof matrix[row][element + 1] !== "undefined"
        ) {
          aux[row][element + 1] = 1;
          contador++;
        }
        if (
          matrix[row][element - 1] === 0 &&
          typeof matrix[row][element - 1] !== "undefined"
        ) {
          aux[row][element - 1] = 1;
          contador++;
        }
      }
    }
  }
  return contador
}
