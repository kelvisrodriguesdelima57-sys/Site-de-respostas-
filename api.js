const express = require('express');
const app = express();
app.use(express.json());

// Rota para buscar atividades
app.post('/atividades', (req, res) => {
  const {ra, senha} = req.body;
    // Aqui faria autenticação e buscar no banco
      res.json([
          {id: 1, nome: 'Matemática', status: 'pendente'},
              {id: 2, nome: 'História', status: 'vencida'}
                ]);
                });

                // Rota para enviar respostas
                app.post('/enviar-respostas', (req, res) => {
                  // Aqui salvaria as respostas
                    res.json({ok: true, mensagem: 'Respostas enviadas!'});
                    });

                    app.listen(3000, () => console.log('API rodando na porta 3000'));