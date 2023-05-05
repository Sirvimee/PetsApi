import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsListComponent } from './pets-list/pets-list.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { AddPetComponent } from './add-pet/add-pet.component';

const routes: Routes = [
  { path: '', redirectTo: 'pets', pathMatch: 'full' },
  { path: 'pets', component: PetsListComponent },
  { path: 'pets/edit/:id', component: UpdatePetComponent },
  { path: 'pets/add', component: AddPetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
