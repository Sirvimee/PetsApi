package ee.planet.meeli.petsApi.model;

public enum PetFurColour {

    BLACK("Black"),
    WHITE("White"),
    BROWN("Brown"),
    YELLOW("Yellow"),
    BLUE("Blue");

    private String displayName;

    PetFurColour(String displayName){
        this.displayName = displayName;
    }

}
