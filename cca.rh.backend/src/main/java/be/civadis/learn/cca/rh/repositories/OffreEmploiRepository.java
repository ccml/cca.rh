package be.civadis.learn.cca.rh.repositories;

import be.civadis.learn.cca.rh.entities.OffreEmploi;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OffreEmploiRepository extends JpaRepository<OffreEmploi, Long> {
    // @Query("SELECT oe from OffreEmploi oe JOIN FETCH oe.detail where oe.id = :id")
    // public Optional<OffreEmploi> retrieveById(Long id);
}
