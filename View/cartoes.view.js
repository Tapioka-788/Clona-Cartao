import { buscarCartoes } from "../Controller/cartaos.services";


export async function criarCartao() {
    let sectioncartao = document.getElementById('');
    sectionCartoes.innerHTML = ''; // Limpa a seção antes de adicionar os cartões

    const cartao = await buscarCartoes(); // Busca os cartões corretamente

    for (let i = 0; i < cartao.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao';

        let h1 = document.createElement('h1');
        h1.textContent = cartao[i].nome;

        let h3 = document.createElement('h3');
        h3.textContent = cartao[i].link;
        
        let h4 = document.createElement('h4');
        h4.textContent = cartao[i].descricao;

        let div = document.createElement('div');
        div.style.display = 'flex';
        div.style.width = '100%';
        div.style.justifyContent = 'space-evenly';

        let button = document.createElement('button');
        button.className = 'button_card';
        button.textContent = 'EXCLUIR';
        button.addEventListener('click', async () => {
            await excluircartao(cartao[i].id);
            criarcartao(); // Recarrega a lista de cartões após exclusão
        });

        let buttonAtt = document.createElement('button');
        buttonAtt.className = 'button_card';
        buttonAtt.textContent = 'ATT';
        buttonAtt.addEventListener('click', () => {
            mostraTelaAtt(cartao[i].id);
        });

        div.appendChild(button);
        div.appendChild(buttonAtt);

        cartao.appendChild(h1);
        cartao.appendChild(h3);
        cartao.appendChild(h4); // Adiciona a descrição ao cartão
        cartao.appendChild(div);

        sectioncartao.appendChild(cartao);
    }

    let cartaoAdd = document.createElement('button');
    cartaoAdd.className = 'cartao';
    cartaoAdd.textContent = '+';
    cartaoAdd.addEventListener('click', () => {
        mostraTelacad();
    });
    sectioncartao.appendChild(cartaoAdd);
}
