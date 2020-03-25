import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompareData } from '../shared/models/user.model'

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  fetchListUsers(): Observable<any> {
    return this.http.get<any>(
      'https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry/all',
    );
  }

  addDataUser (data : CompareData) {
    return this.http.post<CompareData>(
      'https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry',
       data
    );
  }

  deleteDataUsers () {
    return this.http.delete<CompareData>(
      ' https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry');
  }
}
