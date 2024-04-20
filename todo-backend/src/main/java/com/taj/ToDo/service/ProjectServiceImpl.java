package com.taj.ToDo.service;

import java.util.List;

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

	@Override
	public Project updateProject(Project project) {
		throw new UnsupportedOperationException("Unimplemented method 'updateProject'");
	}

	@Override
	public List<Project> getProjects() {
		return projectRepository.findAll();
	}

}
