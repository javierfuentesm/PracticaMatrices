var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
console.log(matrix[3][1]); // 1
console.log(matrix);

function rotate(matrix) {
  // function statement
  const last = matrix.length - 1; // use a constant
  // use arrow functions and nested map;
  const result = matrix.map((row, i) =>
    row.map((value, j) => matrix[last - j][i])
  );

  matrix.length = 0; // hold original array reference
  matrix.push(...result); // Spread operator
  return matrix;
}



/*

[  13,9,5,1]
[  14,  ]

*/

rotate(matrix);
