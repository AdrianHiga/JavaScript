//Loop FOR IN | Loop FOR OF | Estrutura de repetição de interações  FOR(VARIAVEL; CONDIÇÃO ; CONTROLE(CONTADOR))
// length (Comprimento do elemento)
/*
let lista_convidados = ["Adrian", "Adriano", "Angela", "kevin"]

for(let lista = 0; lista < lista_convidados.length; lista++){
    console.log("Posição de entrada: " + (lista)  +  lista_convidados [ lista] )
}
*/

// FOR IN
/*
let lista_convidados = ["Adrian", "Adriano", "Angela", "kevin"]

for(let lista in lista_convidados){
    console.log(lista_convidados[lista])
}
*/
/*
let lista_convidados = ["Adrian", "Adriano", "Angela", "kevin"]

for(let lista of lista_convidados){
    console.log(lista)
}
*/



const objs = document.getElementsByTagName('div')


for(o of objs){
    console.log(o.innerHTML="Curso")
}

for(o in objs){
    console.log(objs[o].innerHTML="Curso")
}