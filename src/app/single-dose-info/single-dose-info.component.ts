import { Component, OnInit } from '@angular/core';
import { VaccineDataService } from '.././vaccine-data.service';
import { IIndividual } from '../model/iindividual';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-single-dose-info',
  template: `<p>List Of Individual Who Have Taken Single Vaccine Dose</p>
  <p style='color:red'>{{errorMsg}}</p>
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
  <td><a (click)="showIndividualData(x)" style='color:blue;cursor:pointer;'>{{x.name}}</a></td>
  <td>{{x.age}}</td>
  <td>{{x.mobile}}</td>
  <td><a (click)="moreVaccineDetail(x)" style='color:blue;cursor:pointer;'>{{x.firstDoseOn | date:'shortDate'}}</a></td>
  </tr>
  </tbody>
  </table>
  `,
  styles: [''],
})
export class SingleDoseInfoComponent implements OnInit {
  private singleDoseIndividuals = [];
  private errorMsg:string;
  private lastSeenEntryId:number;

  constructor(
    private _dataService: VaccineDataService,
    private _route: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._dataService
      .retrieveSingleDoseVaccinatedIndividuals()
      .subscribe((data) => (this.singleDoseIndividuals = data));

    this._activeRoute.paramMap.subscribe((param:ParamMap)=>{
      let previousSelectionId=param.get('id');
      
      this.lastSeenEntryId=previousSelectionId!=null?parseInt(previousSelectionId):-1;
    });
  }

  moreVaccineDetail(dataObj) {
    this._route.navigate([dataObj.vaccineRef],{relativeTo:this._activeRoute});
  }

  showIndividualData(dataObj){
   this._dataService.loadIndividualData().subscribe(
     data=>{},
     error=>{this.errorMsg=error}
   )
  }
}
