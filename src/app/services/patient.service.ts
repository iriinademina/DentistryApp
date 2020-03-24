import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PatientService {
  constructor(private http: HttpClient) {}

  fetchListPatients(): Observable<any> {
    return this.http.get<any>(
      'https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry/all',
    );
  }
}
