// Nota de cada bimestre.

var nota1DoPrimeiroBimestre = 7
var nota2DoPrimeiroBimestre = 7
var nota1DoSegundoBimestre = 8
var nota2DoSegundoBimestre = 8
var nota1DoTerceiroBimestre = 7
var nota2DoTerceiroBimestre = 7
var nota1DoQuartoBimestre = 9
var nota2DoQuartoBimestre = 9

//Código para o somatório das notas de cada prova de cada bimestre.

var notaFinalDoPrimeiroBimestre = (nota1DoPrimeiroBimestre + nota2DoPrimeiroBimestre)

var notaFinalDoSegundoBimestre = (nota1DoSegundoBimestre + nota2DoSegundoBimestre)

var notaFinalDoTerceiroBimestre = (nota1DoTerceiroBimestre + nota2DoTerceiroBimestre)

var notaFinalDoQuartoBimestre = (nota1DoQuartoBimestre + nota2DoQuartoBimestre)

// código para somar a nota total de cada bimestre e dividir por 4

var notaFinal = (notaFinalDoPrimeiroBimestre + notaFinalDoSegundoBimestre + notaFinalDoTerceiroBimestre + notaFinalDoQuartoBimestre) /4

// código para fixar 2 casas decimais.

var notaFixada = notaFinal.toFixed(2) 

//Console para rodar a nota final.

console.log(notaFixada)