package com.pasifcode.baseproject.service.interf;

import com.pasifcode.baseproject.dto.DeptDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

public interface DeptService {
    Page<DeptDto> findAllDepts(String name, Pageable pageable);

    DeptDto findDeptById(Long id);

    DeptDto saveDept(DeptDto dto);

    DeptDto updateDept(DeptDto dto);

    void deleteDept(Long id);
}
