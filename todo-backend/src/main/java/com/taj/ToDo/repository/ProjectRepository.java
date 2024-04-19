package com.taj.ToDo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taj.ToDo.model.Project;


@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
