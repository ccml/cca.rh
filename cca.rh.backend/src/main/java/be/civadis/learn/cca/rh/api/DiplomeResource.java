package be.civadis.learn.cca.rh.api;

import be.civadis.learn.cca.rh.entities.Diplome;
import be.civadis.learn.cca.rh.services.DiplomeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/diplome")
public class DiplomeResource {

    @Autowired
    DiplomeServiceInterface diplomeService;

    public DiplomeServiceInterface getDiplomeService() {
        return diplomeService;
    }

    public void setDiplomeService(DiplomeServiceInterface diplomeService) {
        this.diplomeService = diplomeService;
    }

    @GetMapping("")
    public Iterable<Diplome> listAll() {
        return diplomeService.listerDiplomes();
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id) {
        return diplomeService.supprimerDiplome(id);
    }

    @PutMapping("")
    public Diplome update(@RequestBody  Diplome diplome) {
        return diplomeService.modifierDiplome(diplome);
    }

    @PostMapping("")
    public Diplome add(@RequestBody Diplome diplome) {
        return diplomeService.ajouterDiplome(diplome);
    }

}
