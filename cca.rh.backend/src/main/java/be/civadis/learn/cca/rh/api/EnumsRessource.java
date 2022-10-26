package be.civadis.learn.cca.rh.api;

import be.civadis.learn.cca.rh.entities.enums.EnumsList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/enums")
public class EnumsRessource {

    @GetMapping
    public EnumsList get() {
        return new EnumsList();
    }

}
