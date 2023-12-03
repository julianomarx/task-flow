package com.taskflow.test.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false, unique = true)
    private String ticketNumber;

    @Column(length = 350, nullable = false)
    private String description;

    @Column(length = 15, nullable = false)
    private String status;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timeLog;

    @OneToMany(mappedBy = "task")
    private Set<Designation> designations = new HashSet<>();
}
