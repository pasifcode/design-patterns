package com.pasifcode.baseproject.service.impl;

import com.pasifcode.baseproject.dto.DeptDto;
import com.pasifcode.baseproject.entity.Dept;
import com.pasifcode.baseproject.repository.DeptRepository;
import com.pasifcode.baseproject.service.interf.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class DeptServiceImpl implements DeptService {

    @Autowired
    private DeptRepository deptRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<DeptDto> findAllDepts(String name, Pageable pageable) {
        Page<Dept> find = deptRepository.findAllDepts(name, pageable);
        return find.map(DeptDto::new);
    }

    @Override
    @Transactional(readOnly = true)
    public DeptDto findDeptById(Long id) {
        Dept find = deptRepository.findById(id).orElseThrow();
        return new DeptDto(find);
    }

    @Override
    public DeptDto saveDept(DeptDto dto) {
        Dept add = new Dept();
        add.setName(dto.getName());
        add.setDescription(dto.getDescription());
        return new DeptDto(deptRepository.saveAndFlush(add));
    }

    @Override
    public DeptDto updateDept(DeptDto dto) {
        Dept edit = deptRepository.findById(dto.getId()).orElseThrow();

        edit.setId(edit.getId());
        edit.setName(dto.getName());
        edit.setDescription(dto.getDescription());
        return new DeptDto(deptRepository.save(edit));
    }

    @Override
    public void deleteDept(Long id) {
        this.deptRepository.deleteById(id);
    }
}
