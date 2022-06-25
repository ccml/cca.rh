export interface Diplome {
    id: number;
    titre: string;
}

export interface DetailOffreEmploi {
    id: number;
    contenuLibre: string;
}

export interface OffreEmploi {
    id: number;
    numero: string;
    titre : string;
    statut: StatutOffre;
    typeEngagement: TypeEngagement;
    lieuTravail: string;
    regimeTravail: RegimeTravail;
    idDiplome: number;
    detail: DetailOffreEmploi;
}

export enum StatutOffre {
    EN_COURS_ELABORATION,
    VALIDEE,
    PUBLIEE
}

export enum TypeEngagement {
    DUREE_INDETERMINEE,
    DUREE_DETERMINEE,
    CONSULTANT
}

export enum RegimeTravail {
    REGIME_100,
    REGIME_80,
    REGIME_60,
    REGIME_50
}

export interface EnumsList {
    statutOffreList: StatutOffre[];
    typeEngagementList: TypeEngagement[];
    regimeTravailList: RegimeTravail[];
}
