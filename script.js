document.addEventListener('DOMContentLoaded', function () {
  gerar_cards(10, 'foto');
});

const header = document.querySelector('header');
const galeria = document.querySelector('.galeria');
const botao = document.querySelector('.wpp');
const botaoBuques = document.getElementById('buques');
const botaoFlores = document.getElementById('flores');
const botaoTerceiro = document.getElementById('terceiro');
const carrinho = document.querySelector('.carrinho');

function gerar_cards(x, y) {
  //Limpa a div
  galeria.innerHTML = '';

  for (let index = 0; index < x; index++) {
    // Cria uma nova div para a imagem
    const divImg = document.createElement('div');
    divImg.classList.add('img');

    divImg.setAttribute('id', `card${index}`);

    const imgElement = document.createElement('img');
    imgElement.src = `./imgs/${y}${index + 1}.jpg`;
    imgElement.alt = '...';

    const nomeBuque = document.createElement('h2');
    const valor = document.createElement('p');

    nomeBuque.innerText = 'Sunflower';
    valor.innerText = 'R$:00,00';

    const addcarrinho = document.createElement('button');
    const iconCarrinho = document.createElement('i');

    // Adiciona
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
  gerar_cards(10, 'foto');
});
botaoFlores.addEventListener('click', () => {
  gerar_cards(6, 'flor');
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
      carrinho.classList.add('ativo')
    }
  }
});