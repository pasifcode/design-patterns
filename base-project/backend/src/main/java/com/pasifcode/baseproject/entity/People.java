package com.pasifcode.baseproject.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_people")
public class People {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "people_id")
    private Long id;

    @Column(name = "name", nullable = false, length = 80)
    private String name;

    @Column(name = "age")
    private Integer age;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departament_id")
    private Departament departament;
}


