import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routeInfo: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routeInfo)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
