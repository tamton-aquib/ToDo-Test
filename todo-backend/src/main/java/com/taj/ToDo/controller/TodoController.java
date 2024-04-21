package com.taj.ToDo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taj.ToDo.model.Todo;
import com.taj.ToDo.service.TodoService;

@RestController
@CrossOrigin
@RequestMapping("/todo")
public class TodoController {

	@Autowired
	private TodoService todoService;

	@PostMapping("/add")
	public String addTodo(@RequestBody Todo todo) {
		todoService.saveTodo(todo);
		return "Successfully added the Project";
	}

	@PutMapping("/update")
	public String updateTodo(@RequestBody Todo todo) {
		todoService.saveTodo(todo);
		return "Successfully updated the Project";
	}

	@GetMapping("/getTodos")
	public List<Todo> getTodos(String id) {
		return todoService.getTodos();
	}

	@DeleteMapping("/deleteTodo/{id}")
	public String deleteTodo(@PathVariable("id") Integer id) {
		todoService.deleteTodo(id);
		return "Deleted todo!";
	}

}
