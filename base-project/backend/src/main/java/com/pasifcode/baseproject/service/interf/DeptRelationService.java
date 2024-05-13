package com.pasifcode.baseproject.service.interf;

import com.pasifcode.baseproject.dto.DeptRelationDto;
import com.pasifcode.baseproject.entity.Dept;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DeptRelationService {

    Page<DeptRelationDto> findByRelatingDept(Dept relatedDept, Pageable pageable);

    DeptRelationDto saveDeptRelation(DeptRelationDto dto);

    void deleteDeptRelation(Long id);
}
