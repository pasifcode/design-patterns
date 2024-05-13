package com.pasifcode.baseproject.entity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "tb_dept_relation")
public class DeptRelation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dept_relation_id", nullable = false)
    private Long id;

    @Column(name="description", columnDefinition = "TEXT")
    private String description;

    @ManyToOne
    @JoinColumn(name = "relating_dept")
    private Dept relatingDept;

    @ManyToOne
    @JoinColumn(name = "related_dept")
    private Dept relatedDept;
}
