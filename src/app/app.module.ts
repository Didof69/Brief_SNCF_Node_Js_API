import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { CardComponent } from './components/card/card.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';
import { HeartComponent } from './icones/heart/heart.component';
import { WaterComponent } from './icones/water/water.component';
import { SunComponent } from './icones/sun/sun.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { PlantUpdateComponent } from './components/plant-update/plant-update.component';
import { PlantDeleteComponent } from './components/plant-delete/plant-delete.component';
import { PlantCreateComponent } from './components/plant-create/plant-create.component';
import { SignupUserComponent } from './components/signup-user/signup-user.component';
import { LogUserComponent } from './components/log-user/log-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    PlantListComponent,
    CardComponent,
    FilterBarComponent,
    SearchBarComponent,
    SortBarComponent,
    HeartComponent,
    WaterComponent,
    SunComponent,
    PlantDetailsComponent,
    PlantUpdateComponent,
    PlantDeleteComponent,
    PlantCreateComponent,
    SignupUserComponent,
    LogUserComponent,
    LoginUserComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
