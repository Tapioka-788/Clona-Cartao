export async function criarCartaoFrente() {
    let sectCard = document.getElementById('sectCard')
    let cartaoBase = document.createElement("div");
    cartaoBase.className = "cartao"
    cartaoBase.id = "cartaoBase";

    let topo = document.createElement("div");
    topo.id = "topo";

    let bolinhas = document.createElement("div");
    bolinhas.id = "bolinhas";

    let bola1 = document.createElement("div");
    bola1.id = "bola1";

    let bola2 = document.createElement("div");
    bola2.id = "bola2";

    let nomeB = document.createElement("div");
    nomeB.id = "nomeB";

    let nomeBanco = document.createElement("h1");
    nomeBanco.id = "nomeBanco";
    nomeBanco.textContent = "Nome do Banco";

    let meinho = document.createElement("div");
    meinho.id = "meinho";

    let chipAntena = document.createElement("div");
    chipAntena.id = "chipAntena";

    let chip = document.createElement("div");
    chip.id = "chip";

    let antena = document.createElement("div");
    antena.id = "antena";

    let tipoCartao = document.createElement("h1");
    tipoCartao.textContent = "credit/debit";

    let numeros = document.createElement("div");
    numeros.id = "numeros";

    let numeroCartao = document.createElement("h1");
    numeroCartao.id = "numeroCartao";
    numeroCartao.textContent = "xxxx-xxxx-xxxx-xxxx";

    let valid = document.createElement("div");
    valid.id = "valid";

    let validade = document.createElement("h1");
    validade.className = "txtvalid";
    validade.id = "validade";
    validade.textContent = "validade";

    let data = document.createElement("h1");
    data.className = "txtvalid";
    data.id = "data";
    data.textContent = "xx/yy";

    let nomeN = document.createElement("div");
    nomeN.id = "nomeN";

    let nomeDono = document.createElement("h1");
    nomeDono.textContent = "Nome do dono";

    
    nomeB.appendChild(nomeBanco);
    topo.appendChild(bolinhas);
    topo.appendChild(nomeB);

    bolinhas.appendChild(bola1);
    bolinhas.appendChild(bola2);
    
    chipAntena.appendChild(chip);
    chipAntena.appendChild(antena);

    meinho.appendChild(chipAntena);
    meinho.appendChild(tipoCartao);
    
    valid.appendChild(validade);
    valid.appendChild(data);
    numeros.appendChild(numeroCartao);
    numeros.appendChild(valid);

    nomeN.appendChild(nomeDono);

    cartaoBase.appendChild(topo);
    cartaoBase.appendChild(meinho);
    cartaoBase.appendChild(numeros);
    cartaoBase.appendChild(nomeN);

    sectCard.appendChild(cartaoBase);
}