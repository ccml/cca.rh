package be.civadis.learn.cca.rh.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="doe_detail_offre_emploi")
public class DetailOffreEmploi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column
    private String contenuLibre;

    @JsonBackReference
    @OneToOne
    @JoinColumn(name = "id_offre_emploi", referencedColumnName = "id")
    private OffreEmploi offreEmploi;

}
