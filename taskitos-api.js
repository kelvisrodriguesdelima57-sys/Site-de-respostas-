const express = require('express');
const app = express();
app.use(express.json());

// Simulação de banco de dados (substitua por seu banco real)
const alunos = [
  { ra: "123456789sp", senha: "senha123", nome: "João" },
    { ra: "987654321sp", senha: "senha456", nome: "Maria" }
    ];

    const atividades = [
      { id: 1, ra: "123456789sp", tipo: "atividade", nome: "Matemática", status: "pendente" },
        { id: 2, ra: "123456789sp", tipo: "prova", nome: "Ciências", status: "vencida" }
        ];

        let progresso = []; // { ra, atividadeId, status, tempo, pontuacao }

        // 1. Validar login
        app.post('/login', (req, res) => {
          const { ra, senha } = req.body;
            const aluno = alunos.find(a => a.ra === ra && a.senha === senha);
              if (aluno) {
                  res.json({ ok: true, nome: aluno.nome });
                    } else {
                        res.status(401).json({ ok: false, erro: "RA ou senha inválidos." });
                          }
                          });

                          // 2. Buscar atividades/provas do aluno
                          app.post('/atividades', (req, res) => {
                            const { ra } = req.body;
                              const lista = atividades.filter(a => a.ra === ra);
                                res.json(lista);
                                });

                                // 3. Enviar respostas automaticamente
                                app.post('/responder', (req, res) => {
                                  const { ra, atividadeId, respostas, tempo, pontuacao } = req.body;
                                    progresso.push({
                                        ra,
                                            atividadeId,
                                                status: "respondido",
                                                    tempo,
                                                        pontuacao
                                                          });
                                                            res.json({ ok: true, mensagem: "Respostas enviadas com sucesso!" });
                                                            });

                                                            // 4. Consultar progresso do aluno
                                                            app.post('/progresso', (req, res) => {
                                                              const { ra } = req.body;
                                                                const lista = progresso.filter(p => p.ra === ra);
                                                                  res.json(lista);
                                                                  });

                                                                  app.listen(3000, () => console.log("API Taskitos rodando na porta 3000"));