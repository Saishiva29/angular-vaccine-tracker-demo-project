import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleDoseInfoComponent } from './single-dose-info/single-dose-info.component';
import { IndividualVaccineDataComponent } from './individual-vaccine-data/individual-vaccine-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VaccineCenterDataComponent } from './vaccine-center-data/vaccine-center-data.component';
import { VaccineIngredientDataComponent } from './vaccine-ingredient-data/vaccine-ingredient-data.component';

const routeInfo: Routes = [
  {path:'',redirectTo:'vaccine/data/single',pathMatch:'full'},
  { path: 'vaccine/data/single', component: SingleDoseInfoComponent },
  {
    path: 'vaccine/data/single/:vaccineRef',
    component: IndividualVaccineDataComponent,
    children:[
      {path:'center', component:VaccineCenterDataComponent},
      {path:'ingredient', component:VaccineIngredientDataComponent},{path:'',redirectTo:'ingredient',pathMatch:'full'}
    ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeInfo)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const componentAvailForRoute = [
  SingleDoseInfoComponent,
  IndividualVaccineDataComponent,
  PageNotFoundComponent,
  VaccineCenterDataComponent,
  VaccineIngredientDataComponent
];
