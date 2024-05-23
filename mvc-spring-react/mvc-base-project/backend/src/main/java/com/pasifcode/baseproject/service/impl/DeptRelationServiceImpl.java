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
        Dept relatedDept = deptRepository.findByName(dto.getRelatedDeptName());

        DeptRelation add = new DeptRelation();
        DeptRelation add2 = new DeptRelation();
            if (relatingDept != relatedDept) {
                add.setRelatingDept(relatingDept);
                add.setRelatedDept(relatedDept);
                add.setDescription(dto.getDescription());
                deptRelationRepository.saveAndFlush(add);

                DeptRelation deptRelationReverse = deptRelationRepository.findById(add.getId()).orElseThrow();
                add2.setRelatingDept(deptRelationReverse.getRelatedDept());
                add2.setRelatedDept(deptRelationReverse.getRelatingDept());
                add2.setDescription(add.getDescription());
                deptRelationRepository.saveAndFlush(add2);
            }
        return new DeptRelationDto(add);
    }

    @Override
    public DeptRelationDto updateDeptRelation(DeptRelationDto dto) {
            DeptRelation edit = deptRelationRepository.findById(dto.getId()).orElseThrow();
            edit.setId(edit.getId());
            edit.setDescription(dto.getDescription());

        return new DeptRelationDto(deptRelationRepository.save(edit));
    }

    @Override
    public void deleteDeptRelation(Long id) {
        this.deptRelationRepository.deleteById(id);
    }
}