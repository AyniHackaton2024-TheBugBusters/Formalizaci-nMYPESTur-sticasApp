import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, Subject, tap} from 'rxjs';
import {User} from '../models/user.model';
import {BaseService} from '../shared/service/base.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiService extends BaseService<User> {
  private authStatusSubject = new Subject<boolean>();
  authStatus$ = this.authStatusSubject.asObservable();

  constructor(http: HttpClient) {
    super(http);
    this.extraUrl =  environment.authenticationURL
  }

  signUp(nombre_completo: string, ruc: string, email: string, dni: string, password: string, fecha_nacimiento: Date): Observable<any> {
    const user = {
      nombre_completo,
      ruc,
      email,
      dni,
      password,
      fecha_nacimiento
    };
    return this.http.post(this.buildPath() + '/create-account', user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  signIn(ruc: string, password: string): Observable<any> {
    const user = {
      ruc,
      password
    };
    return this.http.post(this.buildPath() + '/sign-in', user, this.httpOptions)
      .pipe(catchError(this.handleError))
      .pipe(tap((response: any) => {
        this.newToken(response.token);
        const userData = {
          token: response.token,
          userId: response.userId,
          userName: response.userName,
          ruc: response.ruc,
          dni: response.dni,
          email: response.email
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('user_id', response.userId);
        localStorage.setItem('token', response.token);
        this.authStatusSubject.next(true);
      }));
  }

  getUserId(): number {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user_id = localStorage.getItem('user_id');
      return user_id ? parseInt(user_id) : 0;
    }
    return 0;
  }
}
