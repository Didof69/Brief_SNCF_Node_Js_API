import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-delete',
  templateUrl: './plant-delete.component.html',
  styleUrls: ['./plant-delete.component.css'],
})
  
export class PlantDeleteComponent {
  plant!: Plant;
  
  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    // console.log("route param : ",routeParam);
    const plantIdFromRoute = Number(routeParam.get('plantId'));
    // console.log('plantidfromroute : ', plantIdFromRoute);

    this.plantService.getPlantsById(plantIdFromRoute).subscribe((plant) => {
      console.log('ce que je recupère', plant.data);

      this.plant = plant.data;
    });
  }

  deletePlant(plantId: number) {
    console.log('id plante à supprimer :', plantId);
    let retourApi: string = "";

    this.plantService.deletePlant(plantId).subscribe(data=>{
      retourApi = data.message
      console.log(retourApi);
      alert(data.message); 
    })
  }
}

