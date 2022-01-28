module.exports = function towelSort(matrix) {
  const matrixSort = []
  if (matrix){
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const matrixRow = i % 2 === 0 ? j : (matrix[i].length - j - 1)
        matrixSort.push(matrix[i][matrixRow])
      }
    }
  }
  return matrixSort
}
