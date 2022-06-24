package be.civadis.learn.cca.rh.entities;

import be.civadis.learn.cca.rh.entities.enums.RegimeTravail;
import be.civadis.learn.cca.rh.entities.enums.StatutOffre;
import be.civadis.learn.cca.rh.entities.enums.TypeEngagement;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="ofe_offre_emploi")
public class OffreEmploi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 10)
    private String numero;

    @Column(length = 255)
    private String titre;

    @Enumerated(EnumType.STRING)
    @Column(length = 25)
    private StatutOffre statut;

    @Enumerated(EnumType.STRING)
    @Column(length = 25)
    private TypeEngagement typeEngagement;

    @Column(length = 100)
    private String lieuTravail;

    @Enumerated(EnumType.STRING)
    @Column(length = 10)
    private RegimeTravail regimeTravail;

    private Long idDiplome;

    @OneToOne(mappedBy = "offreEmploi", cascade = CascadeType.ALL)
    private DetailOffreEmploi detail;

}
