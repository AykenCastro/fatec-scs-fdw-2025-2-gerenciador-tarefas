const express = require('express');
const cors = require('cors');
const { sequelize, Task } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sincroniza banco de dados
sequelize.sync().then(() => console.log('Banco de dados conectado!'));

// CRUD
// 1. Listar todas
app.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// 2. Criar tarefa
app.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. Atualizar tarefa
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await Task.update(req.body, { where: { id } });
  const updatedTask = await Task.findByPk(id);
  res.json(updatedTask);
});

// 4. Deletar tarefa
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});