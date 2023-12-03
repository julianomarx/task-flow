package com.taskflow.test.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Designations")
public class Designation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "task_id", nullable = false)
    private Task task;
}

