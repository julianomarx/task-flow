package com.taskflow.test.controller;

import com.taskflow.test.model.Task;
import com.taskflow.test.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@AllArgsConstructor
public class TaskController{

    @Autowired
    private final TaskRepository taskRepository;

    @GetMapping
    public void list() {
        System.out.println("Requisição recebida");
    }

    @PostMapping
    public Task create(@RequestBody Task task) {
        return taskRepository.save(task);
    }
}