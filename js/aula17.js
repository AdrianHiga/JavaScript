// Loop While | looping indefinido, enquanto a consição for verdadeira, o mesmo continua executando

let contador = 0

while (contador <= 100){
    console.log(contador)
    contador++
}
console.log("Condição ficou false")


//5! = 5*4*3*2*1

let n = 10
let fat = 1

while (n >=1){
    fat*= n
    n--
    console.log(fat)
}
console.log("Fora do looping")
