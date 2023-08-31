import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-update',
  templateUrl: './plant-update.component.html',
  styleUrls: ['./plant-update.component.css'],
})
export class PlantUpdateComponent {
  @Output() updatedPlant= new EventEmitter();

  plant!: Plant;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    // console.log("route param : ",routeParam);
    const plantIdFromRoute = Number(routeParam.get('plantId'));
    // console.log('plantidfromroute : ', plantIdFromRoute);

    // console.log('plantservice : ', PlantService);

    this.plantService.getPlantsById(plantIdFromRoute).subscribe((plant) => {
      console.log('ce que je recupère', plant.data);

      this.plant = plant.data;
      console.log(this.plant);
    });
  }

  updatePlant() {}
}
