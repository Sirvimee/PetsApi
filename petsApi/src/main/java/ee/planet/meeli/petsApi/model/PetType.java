package ee.planet.meeli.petsApi.model;

public enum PetType {

    CAT("Cat"),
    DOG("Dog"),
    HORSE("Horse"),
    RABBIT("Rabbit"),
    PARROT("Parrot");

    private String displayName;

    PetType(String displayName){
        this.displayName = displayName;
    }

}
