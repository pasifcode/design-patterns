package com.pasifcode.baseproject.repository;

import com.pasifcode.baseproject.entity.People;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PeopleRepository extends JpaRepository<People, Long> {
    @Query("SELECT obj FROM People obj WHERE UPPER(obj.name)" +
            " LIKE UPPER(CONCAT('%', ?1, '%')) ORDER BY obj.name")
    Page<People> findAllPeople(String name, Pageable pageable);
}

