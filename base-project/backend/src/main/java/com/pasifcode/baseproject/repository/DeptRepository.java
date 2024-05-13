package com.pasifcode.baseproject.repository;

import com.pasifcode.baseproject.entity.Dept;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DeptRepository extends JpaRepository<Dept, Long> {
    @Query("SELECT obj FROM Dept obj WHERE UPPER(obj.name)" +
            " LIKE UPPER(CONCAT('%', ?1, '%')) ORDER BY obj.name")
    Page<Dept> findAllDepts(String name, Pageable pageable);
}

