// Break e Continue | Break: expressão que vai gerar uma interrupção no looping | Continue: Para somente naquela interação e continua o looping
/*
let n = 0
let max = 100
while (n < max){
    console.log("Adrian " + n)
    if (n > 10){     
        break
    } 
    n++
}
console.log("Fim do programa")
*/

let n = 0
let contador = 1000
let par = 0
let impar = 0
for (contador1=0 ; n <= contador; n++){
    if (n %2 == 0){
        console.log("PAR " + n)
        par++
    }else{
        console.log("IMPAR " + n)
        impar++
    }
}
console.log("Quantidade de números PAR:" + par)
console.log("Quantidade de números IMPAR:" + impar)
