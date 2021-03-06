package be.civadis.learn.cca.rh.repositories;

import be.civadis.learn.cca.rh.entities.Diplome;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiplomeRepository extends CrudRepository<Diplome, Long> {
    public Optional<Diplome> findByTitre(String titre);
}
