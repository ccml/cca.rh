package be.civadis.learn.cca.rh.repositories;

import be.civadis.learn.cca.rh.entities.Diplome;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiplomeRepository extends CrudRepository<Diplome, Long> {
}
