

const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`

let result = 0

let stage = 0 // 0 mul( , 1 num, 2 coma, 3 num, 4 )

const firstFragment = "mul("
let checkingFirstFragment = 0 

let num1 = ""
let num2 = ""

for(let i=0;i<input.length;i++){

  const c = input[i]

  

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


function reset(){
  stage = 0
  checkingFirstFragment = 0
  num1 = ""
  num2 = ""

}





console.log("RESULT DAY 3 prblm 1:", result)
