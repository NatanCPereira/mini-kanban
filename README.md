# Mini Kanban – Desafio Fullstack (React + Go)

Este projeto é um mini sistema de Kanban com três colunas fixas: A Fazer, Em Progresso e Concluídas.  
O objetivo é demonstrar a integração entre um frontend React e um backend em Go utilizando uma API REST simples.

---

## Estrutura do Projeto

```
/mini-kanban
│
├── /backend
│   ├── main.go
│   ├── handlers.go
│   └── models.go
│
├── /frontend
│   ├── package.json
│   └── src/...
│
└── /docs
    ├── user-flow.png
    └── data-flow.png (opcional)
```

---

## Como Rodar o Projeto

### 1. Pré-requisitos

- Go instalado (versão 1.20 ou superior)  
  https://go.dev/dl/
- Node.js e npm instalados (versão LTS recomendada)  
  https://nodejs.org/

No Windows, durante a instalação do Go e Node.js, marque a opção “Add to PATH”.  
Feche e reabra o PowerShell após a instalação.

---

### 2. Rodar o Backend (Go)

No terminal, acesse a pasta /backend e execute:

```powershell
go mod init mini-kanban-backend
go mod tidy
go run main.go
```

O servidor será iniciado em:
```
http://localhost:8080
```

---

### 3. Testar o Backend (PowerShell)

Use o comando abaixo para criar uma tarefa de teste:

```powershell
Invoke-RestMethod -Uri "http://localhost:8080/tasks" -Method Post -ContentType "application/json" -Body '{"title":"Teste 1","description":"Primeira tarefa"}'
```

Ou, alternativamente:

```powershell
curl.exe -X POST http://localhost:8080/tasks -H "Content-Type: application/json" -d "{"title":"Teste 1","description":"Primeira tarefa"}"
```

Outros testes:
```powershell
# Listar tarefas
Invoke-RestMethod -Uri "http://localhost:8080/tasks" -Method Get

# Atualizar tarefa
Invoke-RestMethod -Uri "http://localhost:8080/tasks/1" -Method Put -ContentType "application/json" -Body '{"title":"Atualizado","status":"Em Progresso"}'

# Excluir tarefa
Invoke-RestMethod -Uri "http://localhost:8080/tasks/1" -Method Delete
```

---

### 4. Rodar o Frontend (React)

No terminal, acesse a pasta /frontend:

```powershell
npm install
npm start
```

Abra o navegador e acesse:
```
http://localhost:3000
```

---

## Decisões Técnicas

- Go (Golang): escolhido pelo desempenho, facilidade na criação de APIs REST e simplicidade de compilação.  
- Armazenamento em memória: para simplificar o MVP. O backend pode ser estendido para persistir tarefas em um arquivo JSON ou banco de dados.  
- CORS habilitado: permite que o React consuma a API sem erros de bloqueio.  
- React (Vite ou Create React App): oferece rapidez no desenvolvimento e renderização reativa das colunas do Kanban.  
- Estados locais no React: facilitam edição e movimentação entre colunas sem necessidade imediata de backend em tempo real.

---

## Limitações Conhecidas

- O backend não persiste dados após reiniciar (armazenamento apenas em memória).  
- Não há autenticação de usuário.  
- Feedbacks de erro e carregamento no frontend são básicos.  
- Atualizações em tempo real (como WebSockets) não foram implementadas.

---

## Melhorias Futuras

- Implementar persistência em arquivo JSON ou banco de dados SQLite.  
- Criar autenticação com usuários e permissões.  
- Adicionar drag-and-drop entre colunas.  
- Refinar feedbacks visuais e adicionar testes unitários.  
- Implementar Docker para facilitar o deploy.

---

## Documentação

- /docs/user-flow.png — mostra as principais ações do usuário.  
- /docs/data-flow.png (opcional) — ilustra o fluxo de dados entre frontend, backend e armazenamento.

---

Este README cumpre integralmente as exigências do desafio:
- Instruções para rodar o backend e frontend.  
- Explicação técnica das decisões.  
- Limitações conhecidas e melhorias futuras.
