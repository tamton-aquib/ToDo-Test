package com.taj.ToDo.model;

import java.util.Date;


import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Todo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

    private String description;

	@Enumerated(EnumType.STRING)
	private TodoStatus status;

    private Date createdDate;
    private Date updatedDate;

	@ManyToOne
	@JoinColumn(name = "project_id")
	private Project project;

    public Todo() {}
}
