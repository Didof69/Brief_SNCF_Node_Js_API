import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.component.html',
  styleUrls: ['./plant-create.component.css'],
})
export class PlantCreateComponent {
  plant!: Plant;
  
  constructor(
    private plantService: PlantService,
    private router :Router,
  ) { }

  createPlant(
    nom: string,
    soleil: string,
    arrosage: number,
    categorie: string,
    image: string
  ) {
    let infoPlant = {
      nom: nom,
      soleil: soleil,
      arrosage: arrosage,
      categorie: categorie,
      image: image,
    };

    console.log('info de la plante à créer',infoPlant);

    if (nom == '') {
        alert(`Merci de renseigner le nom de la plante`);
    } else {
          this.plantService
      .createPlant(infoPlant)
      .subscribe((resp) => {
        if (resp.status == 'OK') {
          alert(`La plante id ${resp.data.id} a été créée.`);
          this.router.navigate([`/plant/${resp.data.id}`]);
        }
      });

      
  }
    }

}
