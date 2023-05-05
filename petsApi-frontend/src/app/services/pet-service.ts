import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Pet } from "../models/pet";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PetService {

    private readonly baseUrl = environment.backendUrl;

    constructor(private http: HttpClient) { }

    getAllPets() {
        return this.http.get(`${this.baseUrl}/pets`);
    }

    addPet(pet: Pet) {
        return this.http.post(`${this.baseUrl}/pets/add`, pet);
    }

    updatePet(pet: Pet, id: string) {
        return this.http.put(`${this.baseUrl}/pets/{id}/edit`, pet);
    }

    getPetById(id: string): Observable<Pet> {
        return this.http.get<Pet>(`${this.baseUrl}/pet/${id}`);
    }
}