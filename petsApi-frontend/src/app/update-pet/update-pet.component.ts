import { Component, OnInit } from '@angular/core';
import { PetType } from '../models/pet-type';
import { PetFurColour } from '../models/pet-fur-colour';
import { PetCountry } from '../models/pet-country';
import { PetService } from '../services/pet-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../models/pet';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {
  pet!: Observable<Pet>;
  id!: string;
  petTypes: string[] = Object.values(PetType);
  petFurColours: string[] = Object.values(PetFurColour);
  petCountries: string[] = Object.values(PetCountry);
  petUpdateForm!: FormGroup;

  constructor(
    private petService: PetService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.petUpdateForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      furColour: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.pet = this.route.params
      .pipe(map((params) => params['id']))
      .pipe(switchMap((id) => this.petService.getPetById(id)));
    this.pet.subscribe((pet) => {
      this.petUpdateForm = this.fb.group({
        id: [pet.id, Validators.required],
        name: [pet.name, Validators.required],
        code: [pet.code, Validators.required],
        type: [pet.type, Validators.required],
        furColour: [pet.furColour, Validators.required],
        country: [pet.country, Validators.required],
      });
      this.id = pet.id;
    });
  }

  onSubmit() {
    const id = this.petUpdateForm.value.id;
    this.petService.updatePet(this.petUpdateForm.value, id)
    .subscribe(res => {
      this.router.navigate(['/pets']);
    }, err => {
      console.error(err);
    });
  }
}
