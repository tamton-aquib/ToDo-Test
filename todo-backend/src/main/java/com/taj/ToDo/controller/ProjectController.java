package com.taj.ToDo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taj.ToDo.model.Project;
import com.taj.ToDo.service.ProjectService;

@RestController
@RequestMapping("/project")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@PostMapping("/add")
	public String addProject(@RequestBody Project project) {
		System.out.println("==========================");
		System.out.println(project.toString());
		System.out.println("==========================");
		projectService.saveProject(project);
		return "Successfully added the Project";
	}

}
