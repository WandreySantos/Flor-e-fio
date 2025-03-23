import express from 'express';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';
import cors from 'cors';

const app = express();
const pasta = './imgs';

app.use(cors());  // Permite o acesso de qualquer origem

// Rota GET para '/imgs'
app.get('/imgs', async (req, res) => {
  try {
    const imgs = await fsPromises.readdir(pasta);
    const arquivosJpg = imgs.filter((img) => {
      const caminhoCompleto = path.join(pasta, img);
      return path.extname(caminhoCompleto).toLowerCase() === '.jpg';
    });
    
    console.log(`Arquivos JPG encontrados:`, arquivosJpg);
    res.json(arquivosJpg);
    
  } catch (err) {
    res.status(500).send('Erro ao ler a pasta');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
