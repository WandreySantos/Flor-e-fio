const galeria = document.querySelector('.galeria');

galeria.innerHTML = '';

for (let index = 0; index < 10; index++) {
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

  // Adiciona
  divImg.appendChild(imgElement);
  divImg.appendChild(nomeBuque);
  divImg.appendChild(valor);
  galeria.appendChild(divImg);
}

const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  window.location.href =
    'https://wa.me/5531972068782?text=Olá! Quero fazer um pedido.';
});