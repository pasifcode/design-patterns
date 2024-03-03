package com.pasifcode.baseproject.service.interf;

import com.pasifcode.baseproject.dto.PeopleDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PeopleService {
    Page<PeopleDto> findPeople(String username, Pageable pageable);

    PeopleDto findPeopleById(Long id);

    PeopleDto savePeople(PeopleDto dto);

    PeopleDto updatePeople(PeopleDto dto);

    void deletePeople(Long id);
}
