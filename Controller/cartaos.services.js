import { criarCartao } from "../View/cartoes.view";

export async function buscarCartoes() {
    try {
        const response = await fetch('');
        const data = await response.json();
        const cartoes = data.cartoes;
        return cartoes;
    }
    catch (e) {
        console.log(e);
    }
}


export async function cadastrarCartao(nome, link, descricao) {
    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                link: link,
                descricao: descricao,
                
            }),
        });
        criarCartao();
    }
    catch (e) {
        console.log(e);
    }
}
