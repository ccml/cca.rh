package be.civadis.learn.cca.rh.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "dip_diplome")
public class Diplome {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255)
    private String titre;

}
