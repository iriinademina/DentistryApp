import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/aws.environment';


@Injectable({ providedIn: 'root' })
export class UserService {
  private endpoint_users : string;
  private _userInfo: Subject<any> = new Subject<
    any
  >();
  userInfo: Observable<any> = this._userInfo.asObservable();

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

  fetchUserById(id: string) :  Observable<any> {
    return this.http.get<any>(`${this.endpoint_users}/${id}`).pipe(
      map ((data) => {
        this._userInfo.next(data)
        return data
      })
    );
  }

  getUserAvatar() : Observable<any> {
    return this.userInfo.pipe(
      map ( user => {
        return `${environment.domain}/${user.avatarPath}`
      }))
  }

  getUserInfo () : Observable<any> {
    return this.userInfo
  }

  uploadImageProfile (id: string, data: any) {
    return this.http.post<any>(`${this.endpoint_users}/${id}/add-profile-picture`, data)
    .pipe(
      map ((data) => {
        this._userInfo.next(data)
        return data
      }));
    }
}
