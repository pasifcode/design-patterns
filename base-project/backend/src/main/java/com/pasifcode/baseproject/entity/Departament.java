package com.pasifcode.baseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_departament")
public class Departament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "departament_id")
    private Long id;

    @Column(name="name", length = 60, unique = true)
    private String name;

    @Column(name="description", columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "departament")
    private Set<People> people = new HashSet<>();

}
