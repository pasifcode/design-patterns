package com.pasifcode.baseproject.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tb_user")
public class User extends BaseEntity {

    @Column(name = "username", nullable = false, unique = true, length = 80)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    public User(Long id, LocalDate createdDate, String createdBy, LocalDate lastModifiedDate, String lastModifiedBy, String username, String email, String password) {
        super(id, createdDate, createdBy, lastModifiedDate, lastModifiedBy);
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
