# Introdução

O objetivo do código é permitir que os usuários realizem operações básicas (adição,
subtração, multiplicação, divisão e cálculo de porcentagem) de maneira interativa
através do terminal. A calculadora solicita que o usuário insira dois números e escolha
uma operação, então exibe o resultado da operação selecionada.

# Estrutura do Código

O código é dividido nas seguintes partes:

## Importação de Módulos

`const prompt = require('prompt-sync')();`
 * Importa o módulo `prompt-sync`, que permite capturar a entrada do usuário via terminal de forma síncrona.

## Declaração de Variáveis

`let primeiroNumero = 0;`

`let segundoNumero = 0;`

`let resposta = 0;`
* `primeiroNumero`: Armazena o primeiro número fornecido pelo usuário.
* `segundoNumero`: Armazena o segundo número fornecido pelo usuário.
* `resposta`: Armazena o resultado da operação.

## Chamada da Função Principal
`calcular();`
* Chama a função `calcular` para iniciar o processo de captura de entrada e cálculo.

## Função calcular
`function calcular() {
primeiroNumero = Number(prompt('Digite o primeiro número: '));` 
* Captura o primeiro número fornecido pelo usuário e o converte para um número.

`const operacao = prompt('Digite a operação desejada (+, -, *, /,
%): ');`
* Captura o tipo de operação desejada pelo usuário.

`segundoNumero = Number(prompt('Digite o segundo número: '));`
* Captura o segundo número fornecido pelo usuário e o converte para um número.

## Estrutura de Controle switch

`switch (operacao) {
case '+':
resposta = primeiroNumero + segundoNumero;
break;`
* Adição (+): Calcula a soma dos dois números.

`case '-':
resposta = primeiroNumero - segundoNumero;
break;`
* Subtração (-): Calcula a diferença entre os dois números.

`case '*':
resposta = primeiroNumero * segundoNumero;
break;`
* Multiplicação (*): Calcula o produto dos dois números.

`case '/':
if (segundoNumero === 0) {
console.log('Erro: divisão por zero não é
permitida.');
return;
}
resposta = primeiroNumero / segundoNumero;
break;`
* Divisão (/): Calcula a divisão do primeiro número pelo segundo. Verifica se o
divisor é zero e exibe uma mensagem de erro se for o caso.

`case '%':
resposta = (primeiroNumero * segundoNumero) / 100;
break;`
* Porcentagem (%): Calcula a porcentagem do primeiro número em relação ao
segundo.

`default:
console.log('Operação inválida.');
return;`
}
* Caso a operação fornecida seja inválida, exibe uma mensagem de erro e retorna.

## Exibição do Resultado

`console.log('O resultado de ${primeiroNumero} , ${operacao}
${segundoNumero} é ${resposta}.');`
}
* Após a execução da operação, o resultado é exibido no console.