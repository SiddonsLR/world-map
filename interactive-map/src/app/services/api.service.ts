import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  countryName = '';
  private apiUrl = 'http://api.worldbank.org/v2/country';
  constructor(private http: HttpClient) { }

  getCountryData(countryName: string): Observable<any> {
    const url = `${this.apiUrl}/${countryName}?format=json`;
    return this.http.get(url);
  }

}
