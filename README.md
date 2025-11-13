Mini-Kanban

Descrição:
Aplicação fullstack simples com três colunas fixas: A Fazer, Em Progresso e Concluídas.
Permite criar, editar, mover e excluir tarefas. Dados armazenados via API REST em Go (memória).

Estrutura do Projeto:
/backend -> API REST em Go
/frontend -> Aplicação em React
/docs -> Diagramas
README.md -> Instruções de uso

Como Executar?
1. Backend (Go)
Requisitos: Go 1.20+

```bash
cd backend
go get github.com/gorilla/mux
go get github.com/rs/cors
go get github.com/google/uuid
go run *.go
```
Servidor: http://localhost:8080

2. Frontend (React):
Requisitos: Node.js 16+

```bash
cd frontend
npm install
npm start
```
App: http://localhost:3000

Teste Rápido da API:
Torne o script executável e rode:
```bash
chmod +x test_api.sh
./test_api.sh
```

Endpoints:
GET /tasks
POST /tasks
PUT /tasks/{id}
DELETE /tasks/{id}
