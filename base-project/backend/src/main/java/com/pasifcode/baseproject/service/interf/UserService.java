package com.pasifcode.baseproject.service.interf;

import com.pasifcode.baseproject.dto.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {
    Page<UserDto> findUsers(String username, Pageable pageable);

    UserDto findUserById(Long id);

    UserDto saveUser(UserDto dto);

    UserDto updateUser(UserDto dto);

    void deleteUser(Long id);
}
