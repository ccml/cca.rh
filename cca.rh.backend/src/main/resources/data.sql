delete from dip_diplome;
delete from ofe_offre_emploi;

insert into dip_diplome (titre) values ('Graduat informatique');
insert into dip_diplome (titre) values ('Licence informatique');
insert into dip_diplome (titre) values ('Graduat autre');
insert into dip_diplome (titre) values ('Licence autre');

insert into ofe_offre_emploi (numero, titre, statut, type_engagement, lieu_travail, regime_travail, id_diplome)
    values (
        'OFR_001',
        'Développeur Java',
        'PUBLIEE',
        'DUREE_INDETERMINEE',
        'Namur',
        'REGIME_100',
        (select id from dip_diplome where titre = 'Graduat informatique')
    );
insert into ofe_offre_emploi (numero, titre, statut, type_engagement, lieu_travail, regime_travail, id_diplome)
    values (
       'OFR_002',
       'Développeur .Net',
       'VALIDEE',
       'CONSULTANT',
       'Leuze',
       'REGIME_100',
       (select id from dip_diplome where titre = 'Graduat informatique')
   );
insert into ofe_offre_emploi (numero, titre, statut, type_engagement, lieu_travail, regime_travail, id_diplome)
    values (
       'OFR_003',
       'Analyste',
       'PUBLIEE',
       'DUREE_INDETERMINEE',
       'Namur',
       'REGIME_80',
       (select id from dip_diplome where titre = 'Licence informatique')
    );

insert into doe_detail_offre_emploi (contenu_libre, id_offre_emploi)
    values (
       '..... Java ......',
       (select id from ofe_offre_emploi where numero = 'OFR_001')
    );
insert into doe_detail_offre_emploi (contenu_libre, id_offre_emploi)
    values (
       '..... .Net ......',
       (select id from ofe_offre_emploi where numero = 'OFR_002')
    );
insert into doe_detail_offre_emploi (contenu_libre, id_offre_emploi)
    values (
       '..... Analyste ......',
       (select id from ofe_offre_emploi where numero = 'OFR_003')
    );
