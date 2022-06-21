package be.civadis.learn.cca.rh.services.impl;

import be.civadis.learn.cca.rh.entities.OffreEmploi;
import be.civadis.learn.cca.rh.repositories.OffreEmploiRepository;
import be.civadis.learn.cca.rh.services.OffreEmploiServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class OffreEmploiService implements OffreEmploiServiceInterface {

    @Autowired
    private OffreEmploiRepository offreEmploiRepository;

    public OffreEmploiRepository getOffreEmploiRepository() {
        return offreEmploiRepository;
    }

    public void setOffreEmploiRepository(OffreEmploiRepository offreEmploiRepository) {
        this.offreEmploiRepository = offreEmploiRepository;
    }

    @Override
    public Iterable<OffreEmploi> listerOffresEmploi() {
        return offreEmploiRepository.findAll();
    }

    @Transactional
    @Override
    public OffreEmploi creerOffresEmploi(OffreEmploi offreEmploi) {
        var savedOffreEmploi = offreEmploiRepository.save(offreEmploi);
        return savedOffreEmploi;
    }

    @Override
    public Optional<OffreEmploi> obtenirOffreEmploiById(Long id) {
        var offreEmploi = offreEmploiRepository.findById(id);
        return offreEmploi;
    }
}
