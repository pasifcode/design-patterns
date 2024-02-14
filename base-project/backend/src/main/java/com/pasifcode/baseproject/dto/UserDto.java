package com.pasifcode.baseproject.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pasifcode.baseproject.entity.User;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDto implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;
    private LocalDate createdDate;
    private String createdBy;
    private LocalDate lastModifiedDate;
    private String lastModifiedBy;
    private String username;
    private String email;
    private String password;

    public UserDto(User entity) {
        id = entity.getId();
        createdDate = entity.getCreatedDate();
        createdBy = entity.getCreatedBy();
        lastModifiedDate = entity.getLastModifiedDate();
        lastModifiedBy = entity.getLastModifiedBy();
        username = entity.getUsername();
        email = entity.getEmail();
        password = entity.getPassword();
    }
}
