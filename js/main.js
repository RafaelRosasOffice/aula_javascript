// STRINGS (mostrar em lista)

// var nome = "Rafael Rosas";
// var idade = 29;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";

// alert sobe um popup na tela
// alert(nome + " tem " + idade + " anos");

// ele soma, multiplica e afins
// alert(idade * idade2);

// consolo.log é para mostrar no console do navegador
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase);

// replace é para trocar alguma coisa por outra
// console.log(frase.replace("Japão","Brasil"));
// alert(frase.replace("Japão","Brasil"));

// toLocaleUpperCase é para colocar tudo em maiúsculo
// console.log(frase.toLocaleUpperCase());

// toLocaleLowerCase é para colocar tudo em minúsculo
// console.log(frase.toLocaleLowerCase());

// ARRAY (mostrar entre [ ])

// var lista = ['maça', 'pêra', 'laranja']

// colocar um item na lista
// lista.push("uva");

// retirar o último elemento da lista
// lista.pop();
// console.log(lista)

// quantidade de elementos
// console.log(lista.length);

// troca a ordem dos elementos
// console.log(lista.reverse())

// consigo mostrar apenas um elemento da lista, o primeiro elemento é o 0(zero)
// console.log(lista[1]);
// alert(lista[1]);

// mostrar como string
// console.log(lista.toString());

// mostra o primeiro elemento do array
// mostra o primeiro elemento da string
// console.log(lista[0]);
// console.log(lista.toString()[0]);

// transforma em string, retira e coloca o q vc qr
// console.log(lista.join(" - "));
// console.log(lista.join("  "));
// console.log(lista.join(""));

// DICIONÁRIO

// escolho qual elemento vai aparecer do dicionário
// var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);

// lista de dicionários
// var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
// console.log(frutas);
// alert(frutas[1].nome);

// CONDICIONAL

/* var idade = 18;
if (idade >= 18){
  alert("maior de idade");
}else{
  alert("menor de idade");
} */

// prompt faz uma pergunta no alert
/* var idade = prompt("Qual sua idade?");
if (idade >= 18){
  alert("maior de idade");
}else{
  alert("menor de idade");
} */

// ESTRUTURA DE REPETIÇÃO

// WHILE

/* var count = 0
while (count < 5){
  console.log(count);
  // tbm posso fazer um alert
  alert(count);
  count = count + 1;
  // ou count++;
} */

// FOR

/* var count;
for(count=0; count <= 5; count++){
  alert(count);
} */

// DATE

// mostrar data
/* var d = new Date();
alert(d); */

// mostrar mês, dia, hora e afins. Ele sempre conta do 0(zero) o mês , por isso precisa somar mais 1
/* var d = new Date();
alert(d.getMonth()+1); */

// FUNÇÕES

// Soma
/* function soma(n1, n2){
  return n1 + n2;
}
alert(soma(5, 10));
*/

// Substituir (replace, setReplace)
/*function soma(n1, n2){
  return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

// Validar
/* function soma(n1, n2) {
  return n1 + n2
}
var validar
function validaIdade(idade) {
  if (idade >= 18) {
    validar = true
  } else {
    validar = false
  }
  return validar
}
var idade = prompt('Qual sua idade?')
validaIdade(idade)
console.log(validar) */

// MANIPULANDO ELEMENTOS DA PÁGINA

/* function clicou() {
  alert('Obrigado por clicar')
} */

// clicar e aparecer no log
/* function clicou() {
  document.getElementById('agradecimento')
  console.log(document.getElementById('agradecimento'))
} */

// clicar e aparecer no html
/* function clicou() {
  document.getElementById('agradecimento').innerHTML = "Obrigado por clicar"
} */

// clicar e abrir outra página
/* function clicou() {
  document.getElementById('agradecimento').innerHTML = "Obrigado por clicar"
} 
function redirecionar(){
  window.open("https://google.com")
} */

// clicar e abrir na mesma página
/* function clicou() {
  document.getElementById('agradecimento').innerHTML = "Obrigado por clicar"
} 
function redirecionar(){
  window.location.href = "https://google.com"
} */

// Passar o mouse e abrir algo
/* function clicou() {
  document.getElementById('agradecimento').innerHTML =
    '<b>Obrigado por clicar</b>'
}
function redirecionar() {
  window.open('https://google.com')
}
function trocar() {
  alert('trocar texto')
} */

// Passar o mouse e trocar o texto
/* function clicou() {
  document.getElementById('agradecimento').innerHTML =
    '<b>Obrigado por clicar</b>'
}
function redirecionar() {
  window.open('https://google.com')
}
function trocar() {
  document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse'
}
function voltar(){
  document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui' 
} */

// Passar o mouse e trocar o texto com mais de um elemento
function clicou() {
  document.getElementById('agradecimento').innerHTML =
    '<b>Obrigado por clicar</b>'
}
function redirecionar() {
  window.open('https://google.com')
}
function trocar(elemento) {
  elemento.innerHTML = 'Obrigado por passar o mouse'
}
function voltar(elemento) {
  elemento.innerHTML = 'Passe o mouse aqui'
}

// LOAD para mostrar qdo a página é carregad
function load() {
  alert('página carregada')
}

// função Change para mostrar o valor escolhido em opções
function funcaoChange(elemento) {
  console.log(elemento.value)
}
