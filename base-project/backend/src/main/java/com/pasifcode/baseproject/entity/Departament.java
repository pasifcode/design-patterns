package com.pasifcode.baseproject.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UuidGenerator;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

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

    private String name;
    private String description;

    @OneToMany(mappedBy = "departament")
    private Set<People> people = new HashSet<>();

}
