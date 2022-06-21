package be.civadis.learn.cca.rh.services;

import be.civadis.learn.cca.rh.entities.OffreEmploi;

import java.util.Optional;

public interface OffreEmploiServiceInterface {
    OffreEmploi creerOffresEmploi(OffreEmploi offreEmploi);
    Iterable<OffreEmploi> listerOffresEmploi();
    Optional<OffreEmploi> obtenirOffreEmploiById(Long id);

}
