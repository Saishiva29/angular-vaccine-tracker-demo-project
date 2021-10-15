import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-individual-vaccine-data',
  template: `
  <p>Data Associated With Vaccine Reference {{referenceId}} Will Be Shown Here</p>
  <a (click)="showVaccineData()" style='color:blue;cursor:pointer;'>Vaccine Ingredient</a>&nbsp;|
  <a (click)="showVaccineCenter()" style='color:blue;cursor:pointer;'>Vaccine Center</a>
  <router-outlet></router-outlet>
  <p><button type="button" (click)="previousEntry()">Previous</button>&nbsp;
  <button type="button" (click)="nextEntry()">Next</button>
  </p>
  <button type="button" (click)="goBack()">Back</button>
  `,
  styles: [''],
})
export class IndividualVaccineDataComponent implements OnInit {
  private referenceId: number;

  constructor(private _route:Router,private _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activeRoute.paramMap.subscribe((param:ParamMap)=>{
    let id=parseInt(param.get('vaccineRef'));
    this.referenceId=id;
    });
  }
  previousEntry(){
  let previousId=this.referenceId - 1;

  this._route.navigate(['../',previousId],{relativeTo:this._activeRoute})
  }
  nextEntry(){
    let nextId=this.referenceId + 1;
  
    this._route.navigate(['../',nextId],{relativeTo:this._activeRoute})
    }

    goBack(){
      this._route.navigate(['../',{id:this.referenceId}],{relativeTo:this._activeRoute});
    }

    showVaccineData(){
      this._route.navigate(['ingredient'],{relativeTo:this._activeRoute});
    }

    showVaccineCenter(){
      this._route.navigate(['center'],{relativeTo:this._activeRoute});
    }
}
