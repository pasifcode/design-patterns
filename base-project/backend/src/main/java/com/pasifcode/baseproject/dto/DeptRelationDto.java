package com.pasifcode.baseproject.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pasifcode.baseproject.entity.DeptRelation;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

@NoArgsConstructor
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DeptRelationDto implements Serializable {
    @Serial
    private final static long serialVersionUID = 1L;

    private Long id;
    private Long relatingDeptId;
    private Long relatedDeptId;
    private String relatingDeptName;
    private String relatedDeptName;
    private String description;

    public DeptRelationDto(DeptRelation entity) {
        id = entity.getId();
        relatingDeptId = entity.getRelatingDept().getId();
        relatedDeptId = entity.getRelatedDept().getId();
        relatedDeptName = entity.getRelatedDept().getName();
        relatingDeptName = entity.getRelatingDept().getName();
        description = entity.getDescription();
    }
}
