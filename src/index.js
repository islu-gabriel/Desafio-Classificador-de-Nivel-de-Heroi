
// BOAS VINDAS E INPUT COM O NOME E NÍVEL DE XP DO HERÓI
console.log("Bem vindo(a) à Jornada do Herói !");

const prompt = require('prompt-sync')();
const nomeDoHeroi = prompt("Informe um nome para a nova aventura: ");

let nivelDeXp = 1
console.log(nomeDoHeroi + ", atualmente o seu nível de XP é = " + nivelDeXp)
console.log()




// A ESCOLHA DE UM CAMINHO ATRAVÉS DE UM INPUT,
// E SUAS CONSEQUÊNCIAS ATRAVÉS DE UMA ESTRUTURA DE CONTROLE DE DECISÃO IF, ELSE IF, ELSE
// OUTPUT DO RESULTADO
console.log("A serguir você tem duas opções de caminho, duas jornadas distintas !")
console.log("Um dos caminhos contém um item que aumentará o seu nível de XP")
console.log("O outro o levará apenas à uma jornada vazia e sem resultados")
console.log()

let caminho = prompt("Escolha um caminho para sua jornada: ")
const min = - 1000
const max = 10001
if (caminho === "direita") {
    nivelDeXp = Math.floor(Math.random() * (max - min + 1)) 
    console.log("Item adquirido ! XP = " + nivelDeXp)

} else if (caminho === "esquerda") {
    console.log("Jornada vazia, portanto, seu XP permanece = " + nivelDeXp)

} else {
    nivelDeXp = Math.floor(Math.random() * (min + 1))
    console.log("Oh-ow, nível muito baixo !")
    console.log("seu XP agora é = " + nivelDeXp)
    console.log("Faça boas escolhas e obtenha um bom histórico de jornadas !")

}




// ESTRUTURA DE CONTROLE DE REPETIÇÃO PARA A ESCOLHA DE UMA NOVA JORNADA OU, 
// O FIM DEFINTIVO DA JORNADA        
let resposta = "";
do {
    resposta = prompt("Deseja iniciar uma nova jornada do herói ? ");
    console.log()

} while (resposta !== "sim" && resposta === "sim");

if (resposta === "sim") {
   let caminho = prompt("Escolha um caminho para sua jornada: ")

   const min = - 1000
   const max = 10001
   if (caminho === "direita") {
      nivelDeXp = Math.floor(Math.random() * (max - min + 1)) 
      console.log("Item adquirido ! XP = " + nivelDeXp)
      console.log()

    } else if (caminho === "esquerda") {
    console.log("Jornada vazia, portanto, seu XP permanece = " + nivelDeXp)
    console.log()
    console.log("INFORMAÇÕES:")

     }  else {
    nivelDeXp = Math.floor(Math.random() * (min + 1))
    console.log("Oh-ow, nível muito baixo !")
    console.log("seu XP agora é = " + nivelDeXp)
    console.log("Faça boas escolhas e obtenha um bom histórico de jornadas !")
    console.log()
    console.log("INFORMAÇÕES:")

     }
     
} else {
    console.log("INFORMAÇÕES:")

}




// PROCESS DE CLASSIFICAÇÃO DE NÍVEL DO HERÓI 
// ATRAVÉS DE UMA ESTRUTURA DE CONTROLE DE DECISÃO SWITCH-CASE
let classificacaoDoHeroi = "";
switch (true) {
    case nivelDeXp >= 0 && nivelDeXp <= 1000:
    classificacaoDoHeroi = "Ferro";
    break;

    case nivelDeXp > 1000 && nivelDeXp <= 2000:
    classificacaoDoHeroi = "Bronze";
    break;

    case nivelDeXp > 2000 && nivelDeXp <= 5000:
    classificacaoDoHeroi = "Prata";
    break;

    case nivelDeXp > 5000 && nivelDeXp <= 7000:
    classificacaoDoHeroi = "Ouro";
    break;

    case nivelDeXp > 7000 && nivelDeXp <= 8000:
    classificacaoDoHeroi = "Platina";
    break;

    case nivelDeXp > 8000 && nivelDeXp <= 9000:
    classificacaoDoHeroi = "Ascendente";
    break;

    case nivelDeXp > 9000 && nivelDeXp <= 10000:
    classificacaoDoHeroi = "Imortal";
    break;

    case nivelDeXp > 10000:
    classificacaoDoHeroi = "Radiante";
    break;

    default:
    classificacaoDoHeroi = "Girino";
    break;

}




// OUTPUT COM NOME, NÍVEL DE XP E CLASSIFICAÇÃO DE NÍVEL DO HERÓI
console.log(`HERÓI: ${nomeDoHeroi}`);
console.log(`NÍVEL DE XP: ${nivelDeXp}`);
console.log(`CLASSIFICAÇÃO: ${classificacaoDoHeroi}`)
