import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-dose-info',
  template: `<p>List Of Individual Who Have Taken Single Vaccine Dose</p>
  <table>
  <thead>
  <tr>
  <th>Sr.No</th>
  <th>Name</th>
  <th>Age</th>
  <th>Mobile</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let x of singleDoseIndividuals">
  <td>{{$index+1}}</td>
  <td>{{x.name}}</td>
  <td>{{x.age}}</td>
  <td>{{x.mobile]}</td>
  </tr>
  </tbody>
  </table>
  `,
  styles: ['']
})
export class SingleDoseInfoComponent implements OnInit {

  private singleDoseIndividuals:Array<{name:string,age:number,mobile:string,address:string,firstDoseOn:Date,nextVaccineOn:Date,secondDoseOn:Date,vacineName:string}> = []
  constructor() { }

  ngOnInit() {
  }

}