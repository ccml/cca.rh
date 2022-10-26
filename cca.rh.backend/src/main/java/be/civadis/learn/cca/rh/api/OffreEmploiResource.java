package be.civadis.learn.cca.rh.api;

import be.civadis.learn.cca.rh.entities.OffreEmploi;
import be.civadis.learn.cca.rh.services.OffreEmploiServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/offre-emploi")
public class OffreEmploiResource {

    @Autowired
    private OffreEmploiServiceInterface offreEmploiService;

    public OffreEmploiServiceInterface getOffreEmploiService() {
        return offreEmploiService;
    }

    public void setOffreEmploiService(OffreEmploiServiceInterface offreEmploiService) {
        this.offreEmploiService = offreEmploiService;
    }

    @GetMapping
    public Iterable<OffreEmploi> listAll() {
        return offreEmploiService.listerOffresEmploi();
    }

    @GetMapping("/{id}")
    public Optional<OffreEmploi> getOne(@PathVariable("id") Long id) {
        return offreEmploiService.obtenirOffreEmploiById(id);
    }

    @PostMapping
    public OffreEmploi add(@RequestBody OffreEmploi offreEmploi) {
        return offreEmploiService.creerOffresEmploi(offreEmploi);
    }
}
