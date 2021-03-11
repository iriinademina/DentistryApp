import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  private endpoint_users : string;
  constructor(private http: HttpClient, private httpBackend: HttpBackend) {
    this.endpoint_users ="http://localhost:3000/users"
  }

  fetchListUsers(): Observable<any> {
    return this.http.get<any>(
      'https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry/all',
    );
  }

  addDataUser(data: any) {
    return this.http.post<any>(
      'https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry',
      data,
    );
  }

  deleteDataUsers() {
    return this.http.delete<any>(
      ' https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry',
    );
  }

  uploadFile(file) {
    return this.http.post<any>(
      ' https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry/upload-file',
      file,
      {
        params: new HttpParams().set('fileName', file.name),
        reportProgress: true,
      },
    );
  }

  getFile(file) {
    return this.http.get<any>(
      '  https://clmc8x54pg.execute-api.us-east-2.amazonaws.com/dev/dentistry/upload-file',
      {
        params: new HttpParams().set('fileName', file.name),
        reportProgress: true,
      },
    );
  }

  createUser(data: any) {
    const newHttpClient = new HttpClient(this.httpBackend);
    return newHttpClient.post<any>(`${this.endpoint_users}`, data);
  }

  fetchUserById(id: string) {
    return this.http.get<any>(`${this.endpoint_users}/${id}`);
  }
}
