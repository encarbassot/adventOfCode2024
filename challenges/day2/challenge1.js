const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

const levels = input.split("\n").map(level=>level.split(" ").map(Number))


let result = 0

for(let i=0; i<levels.length; i++){
  
  const level = levels[i]

  let isSafe = true
  let isIncreasing = level[0] < level[1]
  for(let j=0;j<level.length-1;j++){
    const a = level[j]
    const b = level[j+1]

    if((isIncreasing && a> b) || (!isIncreasing && a<b)) {
      //not safe
      isSafe = false
      continue
    }

    const gap = Math.abs(a-b)
    if(gap < 1 || gap > 3){
      //not safe
      isSafe = false
      continue
    }

  }

  if(isSafe){
    result++
  }
}


console.log("RESULT DAY 2 prblm 1:", result)
