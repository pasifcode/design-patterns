package com.pasifcode.baseproject.service.impl;

import com.pasifcode.baseproject.dto.DeptRelationDto;
import com.pasifcode.baseproject.entity.Dept;
import com.pasifcode.baseproject.entity.DeptRelation;
import com.pasifcode.baseproject.repository.DeptRelationRepository;
import com.pasifcode.baseproject.repository.DeptRepository;
import com.pasifcode.baseproject.service.interf.DeptRelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class DeptRelationServiceImpl implements DeptRelationService {

    @Autowired
    private DeptRelationRepository deptRelationRepository;

    @Autowired
    private DeptRepository deptRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<DeptRelationDto> findByRelatingDept(Dept relatingDept, Pageable pageable) {
        Page<DeptRelation> find = deptRelationRepository.findByRelatingDept(relatingDept, pageable);
        return find.map(DeptRelationDto::new);
    }

    @Override
    public DeptRelationDto saveDeptRelation(DeptRelationDto dto) {
        Dept relatingDept = deptRepository.findById(dto.getRelatingDeptId()).orElseThrow();
        Dept relatedDept = deptRepository.findById(dto.getRelatedDeptId()).orElseThrow();

        DeptRelation add = new DeptRelation();
        DeptRelation add2 = new DeptRelation();
        if (relatingDept != add.getRelatingDept() && relatedDept != add.getRelatedDept()) {
        if (relatingDept != relatedDept) {
                add.setRelatingDept(relatingDept);
                add.setRelatedDept(relatedDept);
                add.setDescription(dto.getDescription());
                deptRelationRepository.saveAndFlush(add);

                DeptRelation deptRelation = deptRelationRepository.findById(add.getId()).orElseThrow();
                add2.setRelatingDept(deptRelation.getRelatedDept());
                add2.setRelatedDept(deptRelation.getRelatingDept());
                add2.setDescription(add.getDescription());
                deptRelationRepository.saveAndFlush(add2);
            } else {
            System.out.println("Um departamento não pode se relacionar consigo mesmo " +
                    "e um relacionamento entre dois departamentos não pode se repitir ");
        }
        }

        return new DeptRelationDto(add);
    }

    @Override
    public void deleteDeptRelation(Long id) {
        this.deptRelationRepository.deleteById(id);
    }
}