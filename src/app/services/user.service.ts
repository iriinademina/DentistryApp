import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../shared/models/user.model';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/aws.environment';


@Injectable({ providedIn: 'root' })
export class UserService {
  private endpoint_users : string;
  private _userInfo: Subject<any> = new Subject<any>();
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

  createUser(data: User) {
    const newHttpClient = new HttpClient(this.httpBackend);
    return newHttpClient.post<User>(`${this.endpoint_users}`, data);
  }

  fetchUserById(id: string) : Observable<User> {
    return this.http.get<User>(`${this.endpoint_users}/${id}`).pipe(
      map ((data) => {
        this._userInfo.next(data)
        return data
      })
    );
  }

  getUserAvatar() : Observable<string> {
    return this.userInfo.pipe(
      map ( user => 
         user && user.avatarPath ? `${environment.domain}/${user.avatarPath}` : null
      ))
  }

  getUserInfo () : Observable<string> {
    return this.userInfo.pipe(
      map ( user => {
        return user.userName
      }))
  }

  uploadImageProfile (id: string, data: FormData) {
    return this.http.patch<{avatarPath: string}>(`${this.endpoint_users}/${id}/add-profile-picture`, data)
    .pipe(
      map ((data) => {
        this._userInfo.next(data)
        return data
      }));
    }

    editUserData ( id: string, data: User ) : Observable<User> {
      return this.http.patch<User>(`${this.endpoint_users}/${id}/update-user-data`, data)
    }
}
