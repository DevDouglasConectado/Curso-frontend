function calcularMedia(notas){

    let soma = 0;

    for(c= 0; c < notas.length; c++){
        soma = soma + notas[c];
    }
    media = soma / notas.length;
    
    return media;
}
let media;

 function aprovacao(notas){

    let media = calcularMedia(notas);

    let condicao = media >= 8 ? "Aprovado" : "Reprovado";
    return 'Média ' +  media + ' - Resultado' +  condicao ;
 }


//console.log("Media: " + calcularMedia([8,8]));
//console.log(aprovacao(calcularMedia([8,8])));

console.log(aprovacao([8,8,7]));
console.log(aprovacao([8,8,10,6]));
console.log(aprovacao([9,6]));