import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-vaccine-data',
  template: `
  <p>Data Associated With Vaccine Reference {{referenceId}} Will Be Shown Here</p>
  `,
  styles: [''],
})
export class IndividualVaccineDataComponent implements OnInit {
  private referenceId: string;

  constructor(private _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    let id = this._activeRoute.snapshot.paramMap.get('vaccineRef');
    this.referenceId = id;
  }
}
