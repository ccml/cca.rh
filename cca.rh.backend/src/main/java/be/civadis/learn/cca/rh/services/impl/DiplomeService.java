package be.civadis.learn.cca.rh.services.impl;

import be.civadis.learn.cca.rh.entities.Diplome;
import be.civadis.learn.cca.rh.repositories.DiplomeRepository;
import be.civadis.learn.cca.rh.services.DiplomeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

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

    @Transactional
    @Override
    public Diplome ajouterDiplome(Diplome diplome) {
        var existingDiplome = diplomeRepository.findByTitre(diplome.getTitre());
        if(existingDiplome.isPresent()) {
            throw new EntityExistsException(diplome.getTitre());
        }
        var addedDiplome = diplomeRepository.save(diplome);
        return addedDiplome;
    }

    @Transactional
    @Override
    public Diplome modifierDiplome(Diplome diplome) {
        var existingDiplome = diplomeRepository.findById(diplome.getId());
        if(!existingDiplome.isPresent()) {
            throw new EntityNotFoundException(diplome.getTitre() + " : " + diplome.getId());
        }
        var updatedDiplome = diplomeRepository.save(diplome);
        return updatedDiplome;
    }

    @Transactional
    @Override
    public boolean supprimerDiplome(Long idDiplome) {
        var existingDiplome = diplomeRepository.findById(idDiplome);
        if(!existingDiplome.isPresent()) {
            return false;
        }
        diplomeRepository.delete(existingDiplome.get());
        return true;
    }
}
