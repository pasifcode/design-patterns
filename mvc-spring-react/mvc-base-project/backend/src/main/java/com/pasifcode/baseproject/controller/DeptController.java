package com.pasifcode.baseproject.controller;

import com.pasifcode.baseproject.dto.DeptDto;
import com.pasifcode.baseproject.service.interf.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/dept")
public class DeptController {

    @Autowired
    private DeptService deptService;

    @GetMapping("/page")
    ResponseEntity<Page<DeptDto>> findAllDepts(@RequestParam(defaultValue = "") String name, Pageable pageable) {
        Page<DeptDto> find = deptService.findAllDepts(name, pageable);
        return ResponseEntity.ok(find);
    }

    @GetMapping("/{id}")
    ResponseEntity<DeptDto> findDeptById(@PathVariable Long id) {
        DeptDto find = deptService.findDeptById(id);
        return ResponseEntity.ok(find);
    }


    @PostMapping("/save")
    ResponseEntity<DeptDto> saveDept(@RequestBody DeptDto dto) {
        DeptDto add = deptService.saveDept(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    ResponseEntity<DeptDto> updateDept(@RequestBody DeptDto dto) {
        DeptDto edit = deptService.updateDept(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deleteDept(Long id) {
        this.deptService.deleteDept(id);
    }
}
