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

while(listA.length>0){

  //find the smallest A
  const minA = listA.reduce((acc,v, i)=>{
    const [prevMin,prevIndex] = acc
    if (v < prevMin){
      return [v, i]
    }
    return acc
  },[listA[0],0])

  listA.splice(minA[1],1) //remove the smallest A


  //find the smallest B
  const minB = listB.reduce((acc,v, i)=>{
    const [prevMin,prevIndex] = acc
    if (v < prevMin){
      return [v, i]
    }
    return acc
  },[listB[0],0])

  listB.splice(minB[1],1) //remove the smallest B


  const a = minA[0]
  const b = minB[0]

  const diff = Math.abs(a-b)
  result+= diff
}

console.log("RESULT DAY 1 prblm 1:", result)
