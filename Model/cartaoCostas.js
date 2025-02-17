export async function criarCartaoBack() {
    let sectCard = document.getElementById('sectCard')
    let cartaoBaseBack = document.createElement("div");
    cartaoBaseBack.className = "cartao";
    cartaoBaseBack.id = "cartaoBaseBack";

    let topoBack = document.createElement("div");
    topoBack.id = "topoBack";

    let meinhoBack = document.createElement("div");
    meinhoBack.id = "meinhoBack";

    let texto = document.createElement("h1");
    texto.textContent = "xxx";

    meinhoBack.appendChild(texto);
    cartaoBaseBack.appendChild(topoBack);
    cartaoBaseBack.appendChild(meinhoBack);

    sectCard.appendChild(cartaoBaseBack);
}
