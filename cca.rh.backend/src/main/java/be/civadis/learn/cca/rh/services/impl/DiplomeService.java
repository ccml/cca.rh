package be.civadis.learn.cca.rh.services.impl;

import be.civadis.learn.cca.rh.entities.Diplome;
import be.civadis.learn.cca.rh.repositories.DiplomeRepository;
import be.civadis.learn.cca.rh.services.DiplomeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiplomeService implements DiplomeServiceInterface {

    @Autowired
    private DiplomeRepository diplomeRepository;

    public DiplomeRepository getDiplomeRepository() {
        return diplomeRepository;
    }

    public void setDiplomeRepository(DiplomeRepository diplomeRepository) {
        this.diplomeRepository = diplomeRepository;
    }

    @Override
    public Iterable<Diplome> listerDiplomes() {
        return diplomeRepository.findAll();
    }
}
