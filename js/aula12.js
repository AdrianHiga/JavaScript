//Operador Spread (...) | Quebrar um conjunto de elementos e devolver elemento por elemento | tem que tá em array []
//let jogador1 = {nome: "Bruno", energia: 100, vidas: 3, magia:150}
//let jogador2 = {nome: "Bruce", energia: 100, vidas: 5, velocidade:80}
//const jogador3 ={...jogador1,...jogador2}
//console.log("n1: " + n1)
//console.log(jogador3)
//console.log("n3: " + typeof(n3))
/*
const soma = (v1,v2,v3)=>{
    return v1+v2+v3
}

let valores = [5,4,3]
console.log(soma(...valores))
*/

const objs1 = document.getElementsByTagName('div')
const objs2 =[...document.getElementsByTagName('div')]

objs2.forEach(element => {
    element.innerHTML="Adrian"
});

console.log(objs1, objs2)