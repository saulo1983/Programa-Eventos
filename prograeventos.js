
var AnoDoSeuNascimento = 2005;
var AnoAtual = 2022;
console.log (`Informe a data do seu nascimento: ${AnoDoSeuNascimento}`);
var idade = AnoAtual - AnoDoSeuNascimento
console.log(`Sua idade é: ${idade}`);
if (idade < 18) {
    console.log ("Não é permitido o cadastro de menores de 18 anos");
}
if (idade>= 18) {
    console.log("Escolha o Evento: Java Iniciantes, Palestrante Paulo Andrade, 15/04, 19h ou JavaScript Iniciantes, Palestrante Márcia Campos, 20/04, 14h")
}
var E1 = 1
console.log(`Você escolheu o evento: ${E1}`);

let NumeroPessoasEvento1 = 100;

 let contador = 0; 

 while (contador <= NumeroPessoasEvento1) {
     console.log(contador)

     if (contador == 0){
         console.log("O número atual é zero")
     } else {
        console.log(`O número atual de pessoas no Evento1 é ${contador}`)
     } 
     contador++;
     }

     let NumeroPessoasEvento2 = 100;

     let contador2 = 0; 
    
     while (contador2 <= NumeroPessoasEvento2) {
         console.log(contador2)
    
         if (contador2 == 0){
             console.log("O número atual é zero")
         } else {
            console.log(`O número atual de pessoas no Evento2 é ${contador2}`)
         } 
         contador2++;
         }


