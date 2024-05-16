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
@Table(name = "tb_dept")
public class Dept {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dept_id")
    private Long id;

    @Column(name="name", length = 60, unique = true)
    private String name;

    @Column(name="description", columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "dept")
    private Set<People> people = new HashSet<>();

    @OneToMany(mappedBy = "relatingDept")
    private Set<DeptRelation> deptsFrom = new HashSet<>();

    @OneToMany(mappedBy = "relatedDept")
    private Set<DeptRelation> deptsTo = new HashSet<>();


}
