

const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

const word = "XMAS"

const matrix = input.split("\n").map(row=>row.split(""))
let result = 0

/**


XMAS
M...
A...
S...


 */



for(let i=0;i<matrix.length;i++){

  const row = matrix[i]
  for(let j=0;j<row.length;j++){
  

    const c = row[j]

    if(c === word[0]){

      const hasLeft = j >= word.length - 1
      const hasRight = row.length - j >= word.length
      const hasUp = i >= word.length - 1
      const hasDown = matrix.length - i >= word.length


      // Check all directions using the helper function
      if (hasLeft && checkDirection(matrix, word, i, j, 0, -1)) result++;
      if (hasRight && checkDirection(matrix, word, i, j, 0, 1)) result++;
      if (hasUp && checkDirection(matrix, word, i, j, -1, 0)) result++;
      if (hasDown && checkDirection(matrix, word, i, j, 1, 0)) result++;
      
      // Diagonals
      if (hasLeft && hasDown && checkDirection(matrix, word, i, j, 1, -1)) result++;
      if (hasLeft && hasUp && checkDirection(matrix, word, i, j, -1, -1)) result++;
      if (hasRight && hasDown && checkDirection(matrix, word, i, j, 1, 1)) result++;
      if (hasRight && hasUp && checkDirection(matrix, word, i, j, -1, 1)) result++;




    }


  }

}




function checkDirection(matrix, word, i, j, di, dj) {
  for (let k = 1; k < word.length; k++) {
    if (matrix[i + k * di][j + k * dj] !== word[k]) {
      return false;
    }
  }
  return true;
}


console.log("RESULT",result)