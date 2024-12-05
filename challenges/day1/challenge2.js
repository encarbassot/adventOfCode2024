const input = `3   4
4   3
2   5
1   3
3   9
3   3`

const listA = []
const listB = []

input.split("\n").forEach(pair=>{
  const [a,b] = pair.split("   ")
  listA.push(Number(a))
  listB.push(Number(b))
})

let result = 0

//count 
const countB ={}

for (const b of listB) {
  if (countB.hasOwnProperty(b)){
    countB[b]++
  }else{
    countB[b] = 1
  }
}


for (const a of listA) {
  result += a*(countB[a] || 0)
}

console.log("RESULT DAY 1 prblm 1:", result)
