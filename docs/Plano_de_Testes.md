# Plano de Testes

**Funcionalidade Foco:** Criar Tarefa (Create Task)

| ID  | Caso de Teste | Pré-requisitos | Passos | Entrada de Dados | Resultado Esperado | Critério de Aceite |
|-----|---------------|----------------|--------|------------------|--------------------|--------------------|
| CT01| Criar tarefa válida | App rodando, Banco conectado | 1. Abrir navegador em `localhost:80`. <br>2. Digitar texto no campo. <br>3. Clicar em "Adicionar". | Título: "Comprar leite" | A tarefa aparece na lista abaixo. | Status HTTP 201 no Network e novo item na DOM. |
| CT02| Tentar criar vazia | App rodando | 1. Deixar campo vazio. <br>2. Clicar em "Adicionar". | Título: "" (vazio) | Nada acontece. Nenhuma requisição enviada. | Validação no frontend previne envio. |

**Exemplo de Teste Manual:**
1. Abra o DevTools (F12) -> Network.
2. Adicione "Estudar Docker".
3. Verifique requisição `POST /tasks` com status 201 Created.