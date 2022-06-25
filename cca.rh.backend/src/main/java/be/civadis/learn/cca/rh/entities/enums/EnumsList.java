package be.civadis.learn.cca.rh.entities.enums;

import java.util.List;

public class EnumsList {
    private StatutOffre[] statutOffreList;
    private TypeEngagement[] typeEngagementList;
    private RegimeTravail[] regimeTravailList;

    public StatutOffre[] getStatutOffreList() {
        return statutOffreList;
    }

    public TypeEngagement[] getTypeEngagementList() {
        return typeEngagementList;
    }

    public RegimeTravail[] getRegimeTravailList() {
        return regimeTravailList;
    }

    public EnumsList() {
        statutOffreList = StatutOffre.values();
        typeEngagementList = TypeEngagement.values();
        regimeTravailList = RegimeTravail.values();
    }
}
