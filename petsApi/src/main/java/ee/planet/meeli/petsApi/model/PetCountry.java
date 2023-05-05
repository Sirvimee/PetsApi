package ee.planet.meeli.petsApi.model;

public enum PetCountry {

    ESTONIA("Estonia"),
    LATVIA("Latvia"),
    LITHUANIA("Lithuania"),
    FINLAND("Finland"),
    SWEDEN("Sweden"),
    NORWAY("Norway");

    private String displayName;

    PetCountry(String displayName){
        this.displayName = displayName;
    }

}
