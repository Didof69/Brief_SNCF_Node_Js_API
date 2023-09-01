import { Component } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { LocalService } from 'src/app/services/local.service';
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

    console.log(infoPlant);
    if (nom == '') {
        alert(`Merci de renseigner le nom de la plante`);
    } else {
          this.plantService
      .createPlant(infoPlant)
      .subscribe((data) => {
        if (data.status == 'OK') {
          alert(`La plante id ${data.data.id} a été créée.`);
        }
      });
  }
    }

}
