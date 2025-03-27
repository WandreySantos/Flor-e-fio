import { produtos } from './data/produtos.js';

const galeria = document.querySelector('.galeria');
const botao = document.querySelector('.wpp');
const botaoBuques = document.getElementById('buques');
const botaoFlores = document.getElementById('flores');
const botaoTerceiro = document.getElementById('terceiro');
const carrinho = document.querySelector('.carrinho');

function gerar_cards(array) {
  galeria.innerHTML = '';

  for (let index = 0; index < array.length; index++) {
    const produto = array[index];

    const divImg = document.createElement('div');
    divImg.classList.add('card');
    divImg.setAttribute('id', `card${index}`);

    const imgElement = document.createElement('img');
    imgElement.src = produto.imagem;
    imgElement.alt = produto.nome;

    const nomeBuque = document.createElement('h2');
    const valor = document.createElement('p');
    nomeBuque.innerText = produto.nome;
    valor.innerText =
      'R$:' + parseFloat(produto.preco).toFixed(2).replace('.', ',');

    const addcarrinho = document.createElement('button');
    const iconCarrinho = document.createElement('i');
    addcarrinho.classList.add('addcarrinho');
    iconCarrinho.classList.add('fas', 'fa-shopping-cart');
    addcarrinho.appendChild(iconCarrinho);

    divImg.appendChild(imgElement);
    divImg.appendChild(nomeBuque);
    divImg.appendChild(valor);
    divImg.appendChild(addcarrinho);

    galeria.appendChild(divImg);
  }
}

botao.addEventListener('click', () => {
  window.location.href =
    'https://wa.me/5531972068782?text=Olá! Quero fazer um pedido.';
});

botaoBuques.addEventListener('click', () => {
  const produtosExpecificos = produtos.filter((produto) =>
    produto.imagem.includes('buque')
  );
  gerar_cards(produtosExpecificos);
});
botaoFlores.addEventListener('click', () => {
  const produtosExpecificos = produtos.filter((produto) =>
    produto.imagem.includes('flor')
  );
  gerar_cards(produtosExpecificos);
});

botaoTerceiro.addEventListener('click', () => {
  galeria.innerHTML = '';
});

document.addEventListener('click', (event) => {
  const botao = event.target.closest('.addcarrinho');
  if (botao) {
    const quantidade = document.querySelector('.quantidade');
    if (quantidade) {
      let valor = parseInt(quantidade.innerText) || 0;
      quantidade.innerText = valor + 1;
      carrinho.classList.add('ativo');
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  gerar_cards(produtos);
});

document.addEventListener('click', (event) => {
  const card = event.target.closest('.card');
  if (card) {
    const informações = document.createElement('div');
    informações.setAttribute('class', 'informações');
    const fechar = document.createElement('p');
    const nome = document.createElement('h1');
    const preço = document.createElement('p');

    fechar.classList.add('class', 'fechar');
    fechar.innerText = 'X';
    nome.innerText = card.querySelector('h2').innerText;
    preço.innerText = card.querySelector('p').cloneNode(true);

    informações.appendChild(card.querySelector('img').cloneNode(true));
    informações.appendChild(fechar);
    informações.appendChild(nome);
    informações.appendChild(preço);

    galeria.appendChild(informações);
    card.classList.add('ativo');
  }
});
