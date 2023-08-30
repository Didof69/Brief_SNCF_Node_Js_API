import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { SignupUserComponent } from './components/signup-user/signup-user.component';
import { LogUserComponent } from './components/log-user/log-user.component';
import { PlantCreateComponent } from './components/plant-create/plant-create.component';
import { PlantUpdateComponent } from './components/plant-update/plant-update.component';
import { PlantDeleteComponent } from './components/plant-delete/plant-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'my-plants', component: PageMyPlantsComponent },
  { path: 'admin', component: PageAdminComponent },
  { path: 'admin/signup', component: SignupUserComponent },
  { path: 'admin/log', component: LogUserComponent },
  { path: 'admin/createplant', component: PlantCreateComponent },
  { path: 'plant/:plantId', component: PlantDetailsComponent },
  { path: 'plant/:plantId/update', component: PlantUpdateComponent },
  { path: 'plant/:plantId/delete', component: PlantDeleteComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
