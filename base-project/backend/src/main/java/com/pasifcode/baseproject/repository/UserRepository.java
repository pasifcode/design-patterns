package com.pasifcode.baseproject.repository;

import com.pasifcode.baseproject.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT obj FROM User obj WHERE UPPER(obj.username)" +
            " LIKE UPPER(?1) ORDER BY obj.username")
    Page<User> findUsers(String username, Pageable pageable);
}
