package com.pasifcode.baseproject.controller;

import com.pasifcode.baseproject.dto.DeptRelationDto;
import com.pasifcode.baseproject.entity.Dept;
import com.pasifcode.baseproject.service.interf.DeptRelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/dept-relation")
public class DeptRelationController {

    @Autowired
    private DeptRelationService deptRelationService;

    @GetMapping("/page/{relatingDept}")
    ResponseEntity<Page<DeptRelationDto>> findByRelatingDept(@PathVariable Dept relatingDept, Pageable pageable) {
        Page<DeptRelationDto> find = deptRelationService.findByRelatingDept(relatingDept, pageable);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/save")
    ResponseEntity<DeptRelationDto> saveDeptRelation(@RequestBody DeptRelationDto dto) {
        DeptRelationDto add = deptRelationService.saveDeptRelation(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deleteDeptRelation(@PathVariable Long id) {
        this.deptRelationService.deleteDeptRelation(id);
    }
}
