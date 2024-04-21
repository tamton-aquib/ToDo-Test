package com.taj.ToDo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taj.ToDo.model.Todo;
import com.taj.ToDo.repository.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	private TodoRepository todoRepository;

	@Override
	public Todo saveTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	@Override
	public Todo updateTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	@Override
	public List<Todo> getTodos() {
		return todoRepository.findAll();
	}

}
