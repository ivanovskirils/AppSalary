import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private baseUrl = 'https://localhost:7168';

  constructor(private http: HttpClient) {}

  getHighSalaryDevelopers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getHighestSalariesOfDevelopers`);
  }
}
