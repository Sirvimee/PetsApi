import { Component, OnInit, ViewChild } from '@angular/core';
import { Pet } from '../models/pet';
import { PetService } from '../services/pet-service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  public pets!: Pet[];
  public dataSource!: MatTableDataSource<Pet>;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['#', 'name', 'code', 'type', 'furColour', 'country', 'action'];

  constructor(
    private petService: PetService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petService.getAllPets().subscribe((data: any) => {
      this.pets = data;
      this.dataSource = new MatTableDataSource(this.pets);
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
