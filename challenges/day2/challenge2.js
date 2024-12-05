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
  
  
  const variations = generateVariations(level)
  for (const variation of variations) {
    
    let isSafe = true
    let isIncreasing = variation[0] < variation[1]
    
    for(let j=0;j<variation.length-1;j++){
      const a = variation[j]
      const b = variation[j+1]
  
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
      break
    }
  }
}


console.log("RESULT DAY 2 prblm 2:", result)



function generateVariations(levels){
  const result = []


  for(let i=0;i<levels.length;i++){
    const variation = levels.toSpliced(i,1)
    result.push(variation)
  }

  return result
}