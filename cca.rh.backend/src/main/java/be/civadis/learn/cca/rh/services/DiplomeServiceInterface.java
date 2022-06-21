package be.civadis.learn.cca.rh.services;

import be.civadis.learn.cca.rh.entities.Diplome;

public interface DiplomeServiceInterface {
    Iterable<Diplome> listerDiplomes();
}
