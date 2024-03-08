package com.pasifcode.baseproject.service.impl;

import com.pasifcode.baseproject.dto.PeopleDto;
import com.pasifcode.baseproject.entity.People;
import com.pasifcode.baseproject.repository.PeopleRepository;
import com.pasifcode.baseproject.service.interf.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PeopleServiceImpl implements PeopleService {

    @Autowired
    private PeopleRepository peopleRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<PeopleDto> findAllPeople(String name, Pageable pageable) {
        Page<People> find = peopleRepository.findAllPeople(name, pageable);
        return find.map(PeopleDto::new);
    }

    @Override
    @Transactional(readOnly = true)
    public PeopleDto findPeopleById(Long id) {
        People find = peopleRepository.findById(id).orElseThrow();
        return new PeopleDto(find);
    }

    @Override
    public PeopleDto savePeople(PeopleDto dto) {
        People add = new People();
        add.setName(dto.getName());
        add.setAge(dto.getAge());
        return new PeopleDto(peopleRepository.saveAndFlush(add));
    }

    @Override
    public PeopleDto updatePeople(PeopleDto dto) {
        People edit = peopleRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setName(dto.getName());
        edit.setAge(dto.getAge());
        return new PeopleDto(peopleRepository.save(edit));
    }

    @Override
    public void deletePeople(Long id) {
        this.peopleRepository.deleteById(id);
    }
}
