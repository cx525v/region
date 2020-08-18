import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as constants from '../constants/index';
import { Country } from '../models/country.model';
import { map } from 'rxjs/operators';
const HEADER_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegionService {

  constructor(private http: HttpClient) {}

  getCountries(region: string) {
    return this.http.get<Country[]>(`${constants.API_URL}${region}`);
  }
}
