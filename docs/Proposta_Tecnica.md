# Proposta Técnica: Gerenciador de Tarefas MVP

## 1. Objetivo
Desenvolver uma aplicação web simples para gerenciamento de tarefas (To-Do List), permitindo criar, listar, atualizar e remover tarefas. O foco é a arquitetura em três camadas e containerização.

## 2. Tecnologias
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla), Nginx.
* **Backend:** Node.js, Express.
* **Banco de Dados:** PostgreSQL, Sequelize ORM.
* **Infraestrutura:** Docker, Docker Compose.

## 3. Arquitetura
A solução segue o padrão MVC (Model-View-Controller) distribuído em microsserviços:
[Browser] <--> [Frontend (Nginx)] <--> [Backend (Node API)] <--> [Database (Postgres)]

## 4. Cronograma
* Sprint 1: Configuração do ambiente e Banco de Dados.
* Sprint 2: Desenvolvimento do Backend (API).
* Sprint 3: Desenvolvimento do Frontend e Integração.
* Sprint 4: Containerização, Testes e Documentação.