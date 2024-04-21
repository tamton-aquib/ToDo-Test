package com.taj.ToDo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.taj.ToDo.model.Todo;

@Service
public interface TodoService {

	public Todo saveTodo(Todo todo);
	public Todo updateTodo(Todo todo);
	public List<Todo> getTodos();

}
