// Comando Switch Case

let colocacao = 4

switch(colocacao){
    case 1 :
        console.log("1° Primeiro colocado")
        break
    case 2 :
        console.log("2° Primeiro colocado")
        break
    case 3 :
        console.log("3° Primeiro colocado")
        break
    case 4: case 5: case 6: console.log('Premio de participação')
        break
    default:
        console.log("Não subiu ao podio")
        break
}