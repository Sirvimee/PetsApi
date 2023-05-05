import { Component, OnInit } from '@angular/core';
import { PetType } from '../models/pet-type';
import { PetFurColour } from '../models/pet-fur-colour';
import { PetCountry } from '../models/pet-country';
import { PetService } from '../services/pet-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',

  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  submitted = false;

  petTypes: string[] = Object.values(PetType);
  petFurColours: string[] = Object.values(PetFurColour);
  petCountries: string[] = Object.values(PetCountry);
  petForm!: FormGroup;

  constructor(
    private petService: PetService, 
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.petForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
      furColour: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.petForm.invalid) {
      return;
    }

    this.petService.addPet(this.petForm.value)
    .subscribe(res => {
      this.router.navigate(['/pets']);
    }, err => {
      console.error(err);
    });
  }

}
