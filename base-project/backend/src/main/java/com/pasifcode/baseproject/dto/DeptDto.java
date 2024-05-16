package com.pasifcode.baseproject.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.pasifcode.baseproject.entity.Dept;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

@NoArgsConstructor
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DeptDto implements Serializable {
    @Serial
    private final static long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String description;

    public DeptDto(Dept entity) {
        id = entity.getId();
        name = entity.getName();
        description = entity.getDescription();
    }
}
