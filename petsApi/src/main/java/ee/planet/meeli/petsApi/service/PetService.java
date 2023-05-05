package ee.planet.meeli.petsApi.service;

import ee.planet.meeli.petsApi.entity.Pet;
import ee.planet.meeli.petsApi.repository.PetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PetService {

    private final PetRepository petRepository;

    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    public void addPet(Pet pet) {
        petRepository.save(pet);
    }

    public void editPet(String id, Pet pet) {
        petRepository.save(pet);
    }

    public Pet getPetById(UUID id) {
        return petRepository.findById(id).orElse(null);
    }
}
