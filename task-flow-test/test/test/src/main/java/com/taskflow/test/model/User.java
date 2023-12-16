package com.taskflow.test.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;


@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String name;

    @Column(length = 35, nullable = false)
    private String role;

    @Column(nullable = false)
    private Boolean isOnline;

    @OneToMany(mappedBy = "user")
    private Set<Designation> designations = new HashSet<>();
}

