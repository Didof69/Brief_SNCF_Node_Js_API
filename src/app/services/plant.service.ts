import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataApi } from '../models/dataApi';
import { DataOnePlant } from '../models/dataOnePlant';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  getPlants(): Observable<DataApi> {
    return this.http.get<DataApi>('http://localhost:3000/api/plants');
  }

  getPlantsById(plantId: number): Observable<DataOnePlant> {
    return this.http.get<DataOnePlant>(`http://localhost:3000/api/plants/${plantId}`);
  }
}
