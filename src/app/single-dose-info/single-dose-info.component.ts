import { Component, OnInit } from '@angular/core';
import { VaccineDataService } from '.././vaccine-data.service';
import { IIndividual } from '../model/iindividual';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-dose-info',
  template: `<p>List Of Individual Who Have Taken Single Vaccine Dose</p>
  <table border='1'>
  <thead>
  <tr>
  <th>Sr.No</th>
  <th>Name</th>
  <th>Age</th>
  <th>Mobile</th>
  <th>Last Dose On</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let x of singleDoseIndividuals;let indexCount=index">
  <td>{{indexCount+1}}</td>
  <td>{{x.name}}</td>
  <td>{{x.age}}</td>
  <td>{{x.mobile}}</td>
  <td><a href="#"(click)="moreVaccineDetail(x)">{{x.firstDoseOn | date:'shortDate'}}</a></td>
  </tr>
  </tbody>
  </table>
  `,
  styles: [''],
})
export class SingleDoseInfoComponent implements OnInit {
  private singleDoseIndividuals = [];

  constructor(
    private _dataService: VaccineDataService,
    private _route: Router
  ) {}

  ngOnInit() {
    this._dataService
      .retrieveSingleDoseVaccinatedIndividuals()
      .subscribe((data) => (this.singleDoseIndividuals = data));
  }

  moreVaccineDetail(dataObj) {
    this._route.navigate(['/vaccinated/single', dataObj.vaccineRef]);
  }
}
