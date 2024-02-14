package com.pasifcode.baseproject.service.impl;

import com.pasifcode.baseproject.dto.UserDto;
import com.pasifcode.baseproject.entity.User;
import com.pasifcode.baseproject.repository.UserRepository;
import com.pasifcode.baseproject.service.interf.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<UserDto> findUsers(String username, Pageable pageable) {
        Page<User> find = userRepository.findUsers(username, pageable);
        return find.map(UserDto::new);
    }

    @Override
    @Transactional(readOnly = true)
    public UserDto findUserById(Long id) {
        User find = userRepository.findById(id).orElseThrow();
        return new UserDto(find);
    }

    @Override
    public UserDto saveUser(UserDto dto) {
        User add = new User();
        add.setUsername(dto.getUsername());
        add.setEmail(dto.getEmail());
        add.setPassword(dto.getPassword());
        return new UserDto(userRepository.saveAndFlush(add));
    }

    @Override
    public UserDto updateUser(UserDto dto) {
        User edit = userRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setUsername(dto.getUsername());
        edit.setEmail(dto.getEmail());
        edit.setPassword(dto.getPassword());
        return new UserDto(userRepository.save(edit));
    }

    @Override
    public void deleteUser(Long id) {
        this.userRepository.deleteById(id);
    }
}
