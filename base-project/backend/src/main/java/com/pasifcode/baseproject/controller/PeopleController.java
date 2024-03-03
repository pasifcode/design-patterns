package com.pasifcode.baseproject.controller;

import com.pasifcode.baseproject.dto.PeopleDto;
import com.pasifcode.baseproject.service.interf.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/people")
public class PeopleController {

    @Autowired
    private PeopleService peopleService;

    @GetMapping("/page")
    ResponseEntity<Page<PeopleDto>> findPeople(@RequestParam(defaultValue = "") String username, Pageable pageable) {
        Page<PeopleDto> find = peopleService.findPeople(username, pageable);
        return ResponseEntity.ok(find);
    }

    @GetMapping("/{id}")
    ResponseEntity<PeopleDto> findPeopleById(@PathVariable Long id) {
        PeopleDto find = peopleService.findPeopleById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/save")
    ResponseEntity<PeopleDto> savePeople(@RequestBody PeopleDto dto) {
        PeopleDto add = peopleService.savePeople(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    ResponseEntity<PeopleDto> updatePeople(@RequestBody PeopleDto dto) {
        PeopleDto edit = peopleService.updatePeople(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deletePeople(Long id) {
        this.peopleService.deletePeople(id);
    }
}