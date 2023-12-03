package com.taskflow.test.controller;

import com.taskflow.test.model.Task;
import com.taskflow.test.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@AllArgsConstructor
public class TaskController{

    @Autowired
    private final TaskRepository taskRepository;

    @GetMapping
    public void list() {
        System.out.println("Requisição recebida");
    }

}
