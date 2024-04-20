package com.taj.ToDo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taj.ToDo.model.Project;
import com.taj.ToDo.repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	@Override
	public Project saveProject(Project project) {
		return projectRepository.save(project);
	}
}
