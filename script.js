document.addEventListener('DOMContentLoaded', function () {
  gerar_cards(10);
});

const galeria = document.querySelector('.galeria');
const botao = document.querySelector('.wpp');
const botaoBuques = document.getElementById('buques');
const botaoFlores = document.getElementById('flores');
const botaoTerceiro = document.getElementById('terceiro');


function gerar_cards(x) {
  //Limpa a div
  galeria.innerHTML = '';

  for (let index = 0; index < x; index++) {
    // Cria uma nova div para a imagem
    const divImg = document.createElement('div');
    divImg.classList.add('img');
    divImg.classList.add('h2');
    divImg.classList.add('p');

    const imgElement = document.createElement('img');
    imgElement.src = `./imgs/foto${index + 1}.jpg`;
    imgElement.alt = '...';

    const nomeBuque = document.createElement('h2');
    const valor = document.createElement('p');

    nomeBuque.innerText = 'Sunflower';
    valor.innerText = 'R$:00,00';

    //------------
    const carrinho = document.createElement('button');
    carrinho.classList.add('carrinho');

    const iconCarrinho = document.createElement('i');
    iconCarrinho.classList.add('fas', 'fa-shopping-cart');
    // Adiciona
    carrinho.appendChild(iconCarrinho);
    //------------
    
    // Adiciona
    divImg.appendChild(imgElement);
    divImg.appendChild(nomeBuque);
    divImg.appendChild(valor);
    divImg.appendChild(carrinho);
    galeria.appendChild(divImg);
  }
}

botao.addEventListener('click', () => {
  window.location.href =
    'https://wa.me/5531972068782?text=Olá! Quero fazer um pedido.';
});
botaoBuques.addEventListener('click', () => {
  console.log("Me apertaram aq");
  gerar_cards(10);
});
botaoFlores.addEventListener('click', () => {
  gerar_cards(5);
});
botaoTerceiro.addEventListener('click', () => {
  galeria.innerHTML = '';

  const carrinho = document.createElement('button');
  carrinho.classList.add('carrinho');

  const iconCarrinho = document.createElement('i');
  iconCarrinho.classList.add('fas', 'fa-shopping-cart');
  // Adiciona
  carrinho.appendChild(iconCarrinho);
  galeria.appendChild(carrinho);
});
