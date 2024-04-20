package com.taj.ToDo.service;

import org.springframework.stereotype.Service;

import com.taj.ToDo.model.Project;

@Service
public interface ProjectService {

	public Project saveProject(Project project);

}
