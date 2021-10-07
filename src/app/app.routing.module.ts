import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleDoseInfoComponent } from './single-dose-info/single-dose-info.component';
import { IndividualVaccineDataComponent } from './individual-vaccine-data/individual-vaccine-data.component';

const routeInfo: Routes = [
  { path: 'vaccinated/single', component: SingleDoseInfoComponent },
  {
    path: 'vaccinated/single/:vaccineRef',
    component: IndividualVaccineDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routeInfo)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const componentAvailForRoute = [
  SingleDoseInfoComponent,
  IndividualVaccineDataComponent,
];
