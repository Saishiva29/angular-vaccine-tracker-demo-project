import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IIndividual } from './model/iindividual';
import { Observable } from 'rxjs';

@Injectable()
export class VaccineDataService {
  private urlPath: string = '/assets/single-vaccine-data.json';

  constructor(private _httpService: HttpClient) {}

  retrieveSingleDoseVaccinatedIndividuals(): Observable<IIndividual[]> {
    return this._httpService.get<IIndividual[]>(this.urlPath);
  }
}
