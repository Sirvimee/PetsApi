package ee.planet.meeli.petsApi.entity;

import ee.planet.meeli.petsApi.model.PetCountry;
import ee.planet.meeli.petsApi.model.PetFurColour;
import ee.planet.meeli.petsApi.model.PetType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private Long code;

    @Enumerated(EnumType.STRING)
    private PetType type;

    @Enumerated(EnumType.STRING)
    private PetFurColour furColour;

    @Enumerated(EnumType.STRING)
    private PetCountry country;

}
