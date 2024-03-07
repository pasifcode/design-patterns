package com.pasifcode.baseproject.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pasifcode.baseproject.entity.People;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;

@Getter
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PeopleDto implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private Integer age;

    public PeopleDto(People entity) {
        id = entity.getId();
        name = entity.getName();
        age = entity.getAge();
    }
}
