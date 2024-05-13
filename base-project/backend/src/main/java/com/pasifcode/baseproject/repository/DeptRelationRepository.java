package com.pasifcode.baseproject.repository;

import com.pasifcode.baseproject.entity.Dept;
import com.pasifcode.baseproject.entity.DeptRelation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeptRelationRepository extends JpaRepository<DeptRelation, Long>{
    Page<DeptRelation> findByRelatingDept(Dept relatingDept, Pageable pageable);
}
