package main

import (
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/google/uuid"
)

var tasks []Task

func GetTasks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tasks)
}

func CreateTask(w http.ResponseWriter, r *http.Request) {
	var task Task
	if err := json.NewDecoder(r.Body).Decode(&task); err != nil {
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}

	if task.Title == "" {
		http.Error(w, "O título é obrigatório.", http.StatusBadRequest)
		return
	}

	task.ID = uuid.New().String()
	if task.Status == "" {
		task.Status = "todo"
	}

	tasks = append(tasks, task)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(task)
}

func UpdateTask(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["id"]

	var updated Task
	if err := json.NewDecoder(r.Body).Decode(&updated); err != nil {
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}

	for i, t := range tasks {
		if t.ID == id {
			tasks[i].Title = updated.Title
			tasks[i].Description = updated.Description
			tasks[i].Status = updated.Status
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(tasks[i])
			return
		}
	}
	http.Error(w, "Tarefa não encontrada.", http.StatusNotFound)
}

func DeleteTask(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["id"]

	for i, t := range tasks {
		if t.ID == id {
			tasks = append(tasks[:i], tasks[i+1:]...)
			w.WriteHeader(http.StatusNoContent)
			return
		}
	}
	http.Error(w, "Tarefa não encontrada.", http.StatusNotFound)
}
