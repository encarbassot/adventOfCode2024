

const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

let result = 0

let stage = 0 // 0 mul( , 1 num, 2 coma, 3 num, 4 )

const firstFragment = "mul("
let checkingFirstFragment = 0 

let num1 = ""
let num2 = ""

let enabled = true

const ENABLE = "do()"
const DISABLE = "dont()"

let isCheckingEnable = false
let enableIndex = 0

for(let i=0;i<input.length;i++){

  const c = input[i]

  if(c==="d"){
    isCheckingEnable = true

  }

  
  if(isCheckingEnable){

    if(DISABLE[enableIndex] === c){
      enableIndex++
      if(enableIndex === DISABLE.length-1){
        enabled = false
        reset()
      }
    }else if(ENABLE[enableIndex] === c){
      enableIndex++
      if(enableIndex === ENABLE.length-1){
        enabled = true
        reset()
      }
    }

  }
  if(!isCheckingEnable && enabled){

    if(stage  === 0){
      if(c === firstFragment[checkingFirstFragment]){
        checkingFirstFragment++
        if(checkingFirstFragment === firstFragment.length){
          stage++
          checkingFirstFragment=0
        }
      }else{
        reset()
      }
    }else if(stage  === 1){
  
      if(!isNaN(c)){
        num1+=c
      }else{
        if(num1.length>=1 && num1.length <=3 ){
          stage++
          i--
        }else{
          reset()
        }
      }
  
    }else if(stage === 2){
      if(c === ","){
        stage ++
      }else{
        reset()
      }
    }else if (stage === 3){
  
      if(!isNaN(c)){
        num2+=c
      }else{
        if(num2.length>=1 && num2.length <=3 ){
          stage++
          i--
        }else{
          reset()
        }
      }
  
    }else if(stage===4){
      if(c === ")"){
  
        const a = Number(num1)
        const b = Number(num2)
  
        result += a*b
      }
      reset()
    }
  }

  



}


function reset(){
  stage = 0
  checkingFirstFragment = 0
  num1 = ""
  num2 = ""

  enableIndex = 0
  isCheckingEnable = false

}





console.log("RESULT DAY 3 prblm 1:", result)
