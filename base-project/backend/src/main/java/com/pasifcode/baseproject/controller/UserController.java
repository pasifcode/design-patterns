package com.pasifcode.baseproject.controller;

import com.pasifcode.baseproject.dto.UserDto;
import com.pasifcode.baseproject.service.interf.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/page")
    ResponseEntity<Page<UserDto>> findUsers(@RequestParam(defaultValue = "") String username, Pageable pageable) {
        Page<UserDto> find = userService.findUsers(username, pageable);
        return ResponseEntity.ok(find);
    }

    @GetMapping("/{id}")
    ResponseEntity<UserDto> findUserById(@PathVariable Long id) {
        UserDto find = userService.findUserById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/save")
    ResponseEntity<UserDto> saveUser(@RequestBody UserDto dto) {
        UserDto add = userService.saveUser(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    ResponseEntity<UserDto> updateUser(@RequestBody UserDto dto) {
        UserDto edit = userService.updateUser(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deleteUser(Long id) {
        this.userService.deleteUser(id);
    }
}
