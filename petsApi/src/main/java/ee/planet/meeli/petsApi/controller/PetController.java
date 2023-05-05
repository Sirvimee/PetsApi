package ee.planet.meeli.petsApi.controller;

import ee.planet.meeli.petsApi.entity.Pet;
import ee.planet.meeli.petsApi.service.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class PetController {

    private final PetService petService;

    @GetMapping("/pets")
    public List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @GetMapping("/pet/{id}")
    public Pet getPetById(@PathVariable("id") UUID id) {
        return petService.getPetById(id);
    }

    @PostMapping("/pets/add")
    public void addPet(@RequestBody Pet pet) {
        petService.addPet(pet);
    }

    @PutMapping("/pets/{id}/edit")
    public void editPet(@PathVariable("id") String id, @RequestBody Pet pet) {
        petService.editPet(id, pet);
    }

}
