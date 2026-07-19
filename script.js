function eventobotao() {
console.log("botão clicado");
alert("você clicou no botão");
}
const botao1 = document.getElementById("botao1");
botao1.addEventListener('click', eventobotao);
const botao2 = document.getElementById("botao2");
botao2.addEventListener('click', eventobotao);
const botao3 = document.getElementById("botao3");
botao3.addEventListener('click', eventobotao);
  
