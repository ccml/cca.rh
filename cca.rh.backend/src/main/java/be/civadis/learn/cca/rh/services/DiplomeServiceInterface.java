package be.civadis.learn.cca.rh.services;

import be.civadis.learn.cca.rh.entities.Diplome;

public interface DiplomeServiceInterface {
    Iterable<Diplome> listerDiplomes();

    Diplome ajouterDiplome(Diplome diplome);

    Diplome modifierDiplome(Diplome diplome);

    boolean supprimerDiplome(Long idDiplome);
}
