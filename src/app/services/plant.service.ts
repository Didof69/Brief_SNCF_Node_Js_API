import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataApi } from '../models/dataApi';
import { DataOnePlant } from '../models/dataOnePlant';
import { ReponseApi } from '../models/reponseApi';
import { UpdatePlant } from '../models/updatePlant';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient, private localStorage: LocalService) { }

  // methode pour initialiser le headers avec une Authorization
  setHeaders() {
    const jwtToken = this.localStorage.getData('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }
  
  getPlants(): Observable<DataApi> {
    return this.http.get<DataApi>('http://localhost:3000/api/plants');
  }

  getPlantsById(plantId: number): Observable<DataOnePlant> {
    return this.http.get<DataOnePlant>(
      `http://localhost:3000/api/plants/${plantId}`
    );
  }

  deletePlant(plantId: number): Observable<ReponseApi> {
    // console.log('plante à supprimer dans plantservice', plantId);

    return this.http.delete<ReponseApi>(
      `http://localhost:3000/api/plants/${plantId}`
    );
  }

  updatePlant(plantId: number, plant: UpdatePlant): Observable<DataOnePlant> {
    // console.log('plante à modifier dans plantservice', plantId,'info update :', plant);

    return this.http.put<DataOnePlant>(
      `http://localhost:3000/api/plants/${plantId}`,
      plant
    );
  }

  createPlant(plant: UpdatePlant): Observable<DataOnePlant> {
    const headers = this.setHeaders()
    console.log('headers',headers,'token',this.localStorage.getData('token'));
    
    return this.http.post<DataOnePlant>(
      `http://localhost:3000/api/plants`,
      plant,
      { headers });
  }
}
