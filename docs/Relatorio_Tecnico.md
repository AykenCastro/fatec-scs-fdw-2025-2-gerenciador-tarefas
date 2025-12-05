# Relatório Técnico: Gerenciador de Tarefas

## 1. Arquitetura e Diagrama
A aplicação opera em três containeres isolados na mesma rede Docker.

    +-------------+      HTTP       +-------------+      TCP       +-------------+
    |  Frontend   |   (JSON)        |   Backend   |    (SQL)       |  Database   |
    | (Nginx/JS)  |  <--------->    | (Node/Exp)  |  <--------->   | (Postgres)  |
    +-------------+   Port 3000     +-------------+   Port 5432    +-------------+

## 2. Modelo de Dados
Tabela: `Tasks`
| Coluna     | Tipo      | Descrição           |
|------------|-----------|---------------------|
| id         | Integer   | Chave Primária (PK) |
| title      | String    | Título da tarefa    |
| completed  | Boolean   | Status (Feito/Não)  |
| createdAt  | Timestamp | Data de criação     |
| updatedAt  | Timestamp | Data de atualização |

## 3. Como Executar
1. Certifique-se de ter Docker e Docker Compose instalados.
2. Na raiz, execute: `docker compose up --build`.
3. Acesse `http://localhost:80`.

## 4. Segurança
* Isolamento de rede via Docker.
* CORS configurado no Backend.
* Credenciais de banco injetadas via variáveis de ambiente.