fetch('http://localhost:3000/imgs')
  .then((response) => response.json()) // Converte a resposta em JSON
  .then((imgs) => {
    // Converte o objeto JSON para uma string
    const imgsString = JSON.stringify(imgs);
    console.log('String JSON:', imgsString);

    const galeria = document.querySelector('.galeria');

    galeria.innerHTML = '';

    imgs.forEach((img) => {
      // Cria uma nova div para a imagem
      const divImg = document.createElement('div');
      divImg.classList.add('img');
      divImg.classList.add('h2');
      divImg.classList.add('p');

      const imgElement = document.createElement('img');
      imgElement.src = `./imgs/${img}`;
      imgElement.alt = img;

      const nomeBuque = document.createElement('h2');
      const valor = document.createElement('p');

      nomeBuque.innerText = 'Sunflower';
      valor.innerText = 'R$:00,00';

      // Adiciona 
      divImg.appendChild(imgElement);
      divImg.appendChild(nomeBuque);
      divImg.appendChild(valor);
      galeria.appendChild(divImg);
    });
  })
  .catch((err) => console.error('Erro ao acessar arquivos:', err));

addEventListener()