var array = [];

// acionado ao clicar em números ou operadores
// inclui os todos numeros e operadores a um array
// exibe no paragrafo de id 'txt' o número ou operador que foi pressionado por ultimo
function funcao(param) {
  var txt = document.getElementById('txt');
  array.push(param);
  txt.innerHTML = (param);
}

// acionado ao clicar na opção =
// passa todos os itens do array para uma variavel e depois usa 'eval()' para calcular a operação
// exibe o resultado no paragrafo de id 'txt'
function resultado() {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  result = eval(result);
  txt.innerHTML = (result);
}

// acionado ao clicar na opção C
// remove todos os itens do array
// passa o valor da variavel result para zero
// volta a exibir apenas um espaço no paragrafo de id 'txt'
function limpar() {
  for (var c = 1; c < array.length; c++) {
    array = array.splice();
  }
  result = 0;
  txt.innerHTML = " ";
}