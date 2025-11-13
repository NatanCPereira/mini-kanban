#!/usr/bin/env bash
BASE="http://localhost:8080"
echo "GET /tasks"
curl -s -X GET "$BASE/tasks" | jq || true
echo
echo "POST /tasks"
CREATED=$(curl -s -X POST "$BASE/tasks" -H "Content-Type: application/json" -d '{"title":"Teste via script","description":"Criada pelo script","status":"todo"}')
echo "$CREATED" | jq || true
ID=$(echo "$CREATED" | jq -r '.id')
if [ -z "$ID" ] || [ "$ID" = "null" ]; then
  echo "Falha ao criar tarefa."
  exit 1
fi
echo "PUT /tasks/{id}"
curl -s -X PUT "$BASE/tasks/$ID" -H "Content-Type: application/json" -d '{"title":"Atualizada","description":"Atualizada pelo script","status":"doing"}' | jq || true
echo
echo "DELETE /tasks/{id}"
curl -s -X DELETE "$BASE/tasks/$ID"
echo
echo "GET /tasks (final)"
curl -s -X GET "$BASE/tasks" | jq || true
