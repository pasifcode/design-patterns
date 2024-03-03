package com.pasifcode.baseproject.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tb_people")
public class People extends BaseEntity {

    @Column(name = "name", nullable = false, length = 80)
    private String name;

    @Column(name = "age")
    private Integer age;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departament_id")
    private Departament departament;

    public People(Long id, Instant createdDate, String createdBy, Instant lastModifiedDate, String lastModifiedBy, String name, Integer age) {
        super(id, createdDate, createdBy, lastModifiedDate, lastModifiedBy);
        this.name = name;
        this.age = age;
    }
}


