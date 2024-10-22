function menuShow() {
  let menumobile = document.querySelector(".mobile-menu");
  if (menumobile.classList.contains("open")) {
    menumobile.classList.remove("open");
    document.querySelector(".icon").src = "./imagens/menu_white_36dp.svg";
  } else {
    menumobile.classList.add("open");
    document.querySelector(".icon").src = "./imagens/close_white_36dp.svg";
  }
}

//Cálculo de IMC

function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

// dividir o seu peso pela altura duas vezes.

// const nome = Text(document.getElementById('nomeb'));

// Função para calcular a quantidade de água
function calcularAgua(peso) {
  const aguaPorKg = 35;
  return ((peso * aguaPorKg) / 1000).toFixed(2);
}

document.getElementById("calcular").addEventListener("click", function () {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const idade = parseInt(document.getElementById("idade").value);

  if (isNaN(altura) || isNaN(peso) || isNaN(idade)) {
    document.getElementById("resultado-imc").innerHTML =
      "Por favor, insira os dados corretamente!";
    return;
  }

  const imc = calcularIMC(peso, altura);
  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  /* IMC  Classificação   Obesidade (grau) 
Menor que 18,5  Magreza 0
Entre 18,5 e 24,9   Normal  0
Entre 25,0 e 29,9   Sobrepeso   I
Entre 30,0 e 39,9   Obesidade   II
Maior que 40,0  Obesidade Grave III
https://www.programasaudefacil.com.br/calculadora-de-imc
*/

  document.getElementById(
    "resultado-imc"
  ).innerHTML = `Você pertence ao grupo: (${classificacao}).`;

  const quantidadeAgua = calcularAgua(peso);
  document.getElementById(
    "resultado-agua"
  ).innerHTML = `Você deve beber ${quantidadeAgua}L de água por dia.`;
});

var botao = document.getElementById("confirm-email");
botao.addEventListener("click", function () {
  alert("Email associado com Sucesso");
});
