import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IIndividual } from './model/iindividual';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class VaccineDataService {
  private urlPath: string = '/assets/single-vaccine-data.json';

  constructor(private _httpService: HttpClient) {}

  retrieveSingleDoseVaccinatedIndividuals(): Observable<IIndividual[]> {
    return this._httpService.get<IIndividual[]>(this.urlPath);
  }

  loadIndividualData() {
    return this._httpService.get('/assets/individual-data.json')
    .catch(this.errorHandler);
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throwError(error.message || 'server side error');
  }
}
