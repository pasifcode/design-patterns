package com.pasifcode.baseproject.service.interf;

import com.pasifcode.baseproject.dto.PeopleDto;
import com.pasifcode.baseproject.entity.Dept;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PeopleService {
    Page<PeopleDto> findAllPeople(String name, Pageable pageable);
    Page<PeopleDto> findPeopleByDept(Dept dept, Pageable pageable);
    PeopleDto findPeopleById(Long id);

    PeopleDto savePeople(PeopleDto dto);

    PeopleDto updatePeople(PeopleDto dto);

    void deletePeople(Long id);
}
