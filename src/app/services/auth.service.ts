import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import Auth from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { Subject, Observable } from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public statusLoggedIn: boolean;
  private _authState: Subject<CognitoUser | any> = new Subject<
    CognitoUser | any
  >();
  authState: Observable<CognitoUser | any> = this._authState.asObservable();

  constructor() {
    Hub.listen('auth', (data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this._authState.next(payload.event);
      }
    });
  }
  signUp(user: User): Promise<CognitoUser | any> {
    return Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.email,
      },
    });
  }

  async signIn(email: string, password: string): Promise<CognitoUser | any> {
    try {
      const user: CognitoUser | any = await Auth.signIn(email, password);
      this.statusLoggedIn = true;
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  async logOut(): Promise<any> {
    await Auth.signOut();
    this.statusLoggedIn = false;
  }

  async getToken() {
    return await (await Auth.currentSession()).getIdToken().getJwtToken();
  }
}
