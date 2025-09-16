// BOAS VINDAS E INPUT COM O NOME DO HERÓI

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
    console.log()

} else if (caminho === "esquerda") {
    console.log("Jornada vazia, portanto, seu XP permanece = " + nivelDeXp)
    console.log()

} else {
    nivelDeXp = Math.floor(Math.random() * (min + 1))
    console.log("Oh-ow, nível muito baixo !")
    console.log("seu XP agora é = " + nivelDeXp)
    console.log("Faça boas escolhas e obtenha um bom histórico de jornadas !")
    console.log()

}

// PROCESS DE CLASSIFICAÇÃO DE NÍVEL DO HERÓI ATRAVÉS DE UMA ESTRUTURA DE CONTROLE DE DECISÃO SWITCH-CASE

let classificacaoDoHeroi;

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

    case nivelDeXp > 9000 && nivelDeXp <= 1000:
        classificacaoDoHeroi = "Imortal";
        break;

    case nivelDeXp > 1000:
        classificacaoDoHeroi = "Radiante";
        break;

    default:
        classificacaoDoHeroi = "Girino";

}

//  OUTPUT COM NOME, NÍVEL DE XP E CLASSIFICAÇÃO DE NÍVEL DO HERÓI

console.log(`Herói: ${nomeDoHeroi}`);
console.log(`Nível de XP: ${nivelDeXp}`);
console.log(`Classificação: ${classificacaoDoHeroi}`);
